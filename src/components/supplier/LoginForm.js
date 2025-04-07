"use client";

import Login from "./Login";
import SupplierMiddleWareProvider from "./middleware/SupplierMiddleWareContext";

const LoginForm = () => {


    return (

        <SupplierMiddleWareProvider>
            <Login />
        </SupplierMiddleWareProvider>
    );
}
export default LoginForm
