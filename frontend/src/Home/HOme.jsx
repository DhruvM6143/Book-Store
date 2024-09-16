import React from 'react'

import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import FreeBook from '../components/FreeBook.jsx';

function HOme() {
    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white'>
                <Navbar />
                <Banner />
                <FreeBook />
                <Footer />
            </div>


        </>
    )
}

export default HOme