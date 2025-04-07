import { DM_Sans } from "next/font/google";
import '@/app/globals.css';

import LayoutWrapper from "@/components/admin/LyoutWrapper";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

export const metadata = {
    title: "Admin Dashboard",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} antialiased`}>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
