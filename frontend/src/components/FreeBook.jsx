import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeBook() {
  const [book, serBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:5000/book')
        const data = res.data.filter((data) => data.category === 'free')
        serBook(data);
      } catch (error) {
        console.log(err);
      }
    }
    getBook();
  })



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl  container mx-auto md:px-20 px-5'>
        <div><h1 className='font-semibold text-xl pb-2'>Free Offered courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam accusantium placeat voluptates corporis atque deleniti obcaecati, repellendus earum ipsa recusandae unde quas et. Temporibus aspernatur veniam architecto similique alias?</p>
        </div>


        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBook