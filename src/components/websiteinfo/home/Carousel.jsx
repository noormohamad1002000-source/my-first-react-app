import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const slides = [
    "http://demo.webshree.in/shreeanant/images/banner3.jpg",
    "http://demo.webshree.in/shreeanant/images/banner1.jpg",
    "http://demo.webshree.in/shreeanant/images/banner2.jpg"];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Next slide function
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    // Prev slide function
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Autoplay — har 5  second mein next slide
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer); // ← CLEANUP zaroori hai!
    }, [currentIndex]);

    return (
        <div className="relative" >

            

                <img src={slides[currentIndex]} alt="image" className="relative"  />

            
          
              <button className="absolute top-1/2 -translate-1/2 left-4.5 cursor-pointer text-5xl text-white" onClick={prevSlide}><FaAngleLeft /> </button>
              <button className="absolute top-1/2 -translate-1/2 right-4.5 cursor-pointer text-5xl text-white" onClick={nextSlide}><FaAngleRight /></button>
       
          
        </div>
    );
}