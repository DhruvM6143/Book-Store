import React from 'react'
import Book from "../../public/Book.jpg"
function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col md:flex-row ml-3 mr-3 '>
                <div className='w-full md:w-1/2 mt-12 md:mt-36'>
                    <div className='space-y-8'>
                        <h1 className='text-2xl md:text-4xl font-bold'>Hello, Welcome here to learn something <span className='text-pink-500'>new everyday</span></h1>
                        <p className='text-sm md:text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla itaque voluptate autem, corporis vitae similique quaerat beatae, quas voluptatem, delectus doloremque sunt ab modi? Dolores, voluptates? Placeat, vel vitae?</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                        </label>
                    </div>
                    <button className="btn mt-6 btn-secondary">Get Started</button>

                </div>
                <div className='w-full md:w-1/2 mt-12 md:mt-36'>

                    <div className='w-full  p-5'>
                        <img src={Book} className='w-92 h-92' alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner