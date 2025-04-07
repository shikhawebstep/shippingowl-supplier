import React from 'react'
import Login from './Login'
import DropshipperMiddleWareProvider from './middleware/DropshipperMiddleWareContext'
export default function LoginForm() {
    return (
        <DropshipperMiddleWareProvider>
            <Login />
        </DropshipperMiddleWareProvider>
    )
}
