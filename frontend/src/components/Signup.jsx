import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login.jsx'
import axios from 'axios'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Signup() {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:5000/user/signup', userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("signup successful")
                    navigate(from, { replace: true });
                }

                localStorage.setItem("Users", JSON.stringify(res.data.createdUser));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error(err.response.data.message)
                }
            })

    }
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[500px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Sign-Up</h3>
                            <div className='mt-4 space-y-2'>
                                <span>fullname</span>
                                <br />
                                <input {...register("fullname", { required: true })} type="text" placeholder='Enter your fullname' className='py-1 w-80 px-3 border rounded-md outline-none' />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input {...register("email", { required: true })} type="email" placeholder='Enter your email' className='py-1 w-80 px-3 border rounded-md outline-none' />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input {...register("password", { required: true })} type="text" placeholder='Enter your Password' className='py-1 w-80 px-3 border rounded-md outline-none' />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign-Up</button>
                                <p className='text-xl   '>Already have an account?<button className='underline text-blue-500 cursor-pointer ' onClick={() => document.getElementById("my_modal_3").showModal()}> Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    )
}

export default Signup