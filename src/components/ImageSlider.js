import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {motion} from 'framer-motion';
import styled from 'styled-components'



const ImageSlider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        console.log(index);
        return (
          <>
            {index === current && (
              <>
                <motion.img 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
                src={slide.image} alt="travel" className="image" />
                <div className='hero-content'>
                  <h1>Hello there</h1>
                  <p>{slide.text}</p>
                </div>
              </>
            )}
          </>
          // <HeroInner
          // initial={{opacity:0}}
          // animate={{opacity:1}}
          // transition={{duration:0.5}}
          // gambar_item={slide.image}
          // >
          //   Haloha
          // </HeroInner>
        );
        
      })}
    </section>
  );
};

export default ImageSlider;

// const HeroInner = styled(motion.div)`
//   background-image: 
//   background-repeat: no-repeat;
//   background-size: cover;
//   width:100vw;
//   height:100vh;
//   border-radius: 10px;
// `
