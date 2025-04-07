"use client";

import Login from "./Login";
import AdminMiddleWareProvider from "./middleware/AdminMiddleWareContext";

const LoginForm = () => {


    return (

        <AdminMiddleWareProvider>
            <Login />
        </AdminMiddleWareProvider>
    );
}
export default LoginForm
