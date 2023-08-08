import { useState } from "react";
import "./ImageCarousel.scss";
// import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    console.log(images)
    const imageUrls = images;

    const prevBtn = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imageUrls.length - 1 : currentIndex - 1 
        setCurrentIndex(newIndex)
    }

    const nextBtn = () => {
        const isLastSlide = currentIndex === imageUrls.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // console.log(currentIndex)

    return (
        <div>
                <div className={currentIndex ? 'carousel-container active' : 'carousel-container'}>
                    <img src={imageUrls[currentIndex]} alt={imageUrls[currentIndex].title} className='carousel-image'/>
                    <IoMdArrowDropleft className='left-btn' onClick={prevBtn}/>
                    <IoMdArrowDropright className='right-btn' onClick={nextBtn}/>
                </div>
        </div>
    )
}

export default ImageCarousel