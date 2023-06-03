import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const Slide = () => {
    const slides = [
        {
            url : "https://images.pexels.com/photos/7933471/pexels-photo-7933471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url : "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url : "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url : "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url : "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url : "https://images.pexels.com/photos/12086934/pexels-photo-12086934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    const [PIndex, setPIndex] = useState(0)

    const prevSlide = () => {
        const firstIndex = PIndex === 0
        const newIndex = firstIndex ? slides.length - 1 : PIndex -1
        setPIndex(newIndex)
    }
    const nextSlide = () => {
        const lastIndex = PIndex === slides.length -1
        const newIndex = lastIndex ? 0 : PIndex + 1
        setPIndex(newIndex)
    }
    const dotSlide = (slidesIndex) => {
        setPIndex(slidesIndex)
    }

  return (
    <div className="max-w-[1440px] h-[740px] py-16 px-4 relative m-auto group">
      <div style={{backgroundImage : `url(${slides[PIndex].url})`}} className="bg-center bg-cover w-full h-full rounded-2xl duration-500">  
    </div>
    <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 rounded-full bg-black/20 cursor-pointer text-white font-bold">
        <BsChevronCompactLeft onClick={prevSlide} />
    </div>

    <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 rounded-full bg-black/20 cursor-pointer text-white font-bold ">
        <BsChevronCompactRight onClick={nextSlide} />
    </div>
    <div className="top-4 flex justify-center py-2">
       {slides.map((slide, slidesIndex) => {
        return (
            <div key={slidesIndex} onClick={() => dotSlide(slidesIndex)} className="text-2xl cursor-pointer text-gray-700">
            <RxDotFilled  />
        </div>
        )
        
       })}
    </div>
    </div>
  )
}

export default Slide
