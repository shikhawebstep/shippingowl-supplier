import { createContext, useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AdminMiddleWareContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminMiddleWareContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminMiddleWareProvider");
    }
    return context;
};

export default function AdminMiddleWareProvider({ children }) {
    const [adminApiLoading, setAdminApiLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const verifyAdminAuth = useCallback(async () => {
        setLoading(true);
        const adminData = JSON.parse(localStorage.getItem("shippingData"));
        if (adminData?.project?.active_panel !== "admin") {
            localStorage.removeItem("shippingData"); // Correct way to remove a specific item
            router.push("/admin/auth/login");        // Redirect to login
        }

        const admin_token = adminData?.security?.token;
        if (!admin_token) return; // Early exit if no token

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/auth/verify`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${admin_token}`,
                },
            });

            if (!response.ok) {
                localStorage.clear("shippingData");
                const errorMessage = await response.json();
                Swal.fire({
                    icon: "error",
                    title: "Session Expired",
                    text: errorMessage.message || "Your session has expired. Please log in again.",
                });
                throw new Error(errorMessage || "Session expired");
            }

            const result = await response.json();

            if (!result.status) {
                localStorage.clear("shippingData");
                Swal.fire({
                    icon: "error",
                    title: "Unauthorized",
                    text: result.message || "Invalid token or unauthorized access.",
                });
                router.push("/admin/auth/login");
                return;
            }

            return true;

        } catch (error) {
            console.error("Error:", error);
            setError(error.message || "Something went wrong");
            router.push("/admin/auth/login");
        } finally {
            setLoading(false);
        }
    }, [router]);



    return (
        <AdminMiddleWareContext.Provider value={{ adminApiLoading, verifyAdminAuth, error, loading }}>
            {children}
        </AdminMiddleWareContext.Provider>
    );
}
