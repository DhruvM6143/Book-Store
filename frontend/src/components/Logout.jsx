import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
function Logout() {

    const [authUser, setAuthUser] = useAuth();
    function handleLogout() {
        try {
            setAuthUser({
                ...authUser,
                User: null
            })
            localStorage.removeItem('Users')
            toast.success("logout successfully")

            setTimeout(() => {
                window.location.reload()

            }, 2000)
        } catch (error) {
            toast.error("error: " + error);
            setTimeout(() => { }, 3000)
        }
    }

    return (
        <>
            <div>
                <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Logout