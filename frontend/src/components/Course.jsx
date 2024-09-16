import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:5000/book")
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook()
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className=' text-pink-500'>Here!:)</span> </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem commodi recusandae debitis reiciendis nesciunt eaque, deserunt sint voluptate vitae fugiat minima tempore? Nihil, delectus amet tempora corrupti nemo a.
                        Id sapiente libero consequuntur quod nostrum eos exercitationem minus tempore magni sit sint adipisci, accusantium eum. Accusantium deserunt debitis blanditiis, labore recusandae sit est possimus earum incidunt impedit autem ex?
                        Illo adipisci eum aliquam praesentium itaque porro, maiores, laboriosam id, consequuntur voluptatem voluptas laudantium inventore fugiat at incidunt eaque quasi nulla quam explicabo doloremque deserunt. Molestiae quas in facilis explicabo!</p>
                    <Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Course