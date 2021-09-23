
import React, {useState} from 'react'
import {CarouselData} from './CarouselData';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';

const Carousel2 = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1: current -1)
    }
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0: current +1)
    }

  
    

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide}/>
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active': 'slide'} key={index}> 
                        {index === current && (
                        <img src={slide.image} alt='travel' className='image' /> )}
                    </div>
                );
            })}
        </section>
    );
};

export default Carousel2
