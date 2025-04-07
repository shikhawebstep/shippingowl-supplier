import LoginForm from '@/components/admin/LoginForm'
import AdminMiddleWareProvider from '@/components/admin/middleware/AdminMiddleWareContext'
import React from 'react'

function page() {
    return (
        <>
        <AdminMiddleWareProvider>

        <LoginForm />
        </AdminMiddleWareProvider>
            
        </>
    )
}

export default page