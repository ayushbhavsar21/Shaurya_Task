import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://www.hindustantimes.com/ht-img/img/2024/05/27/550x309/SRK_KKR__1716780602167_1716780602493.jpg',
    alt: 'Image 1',
    caption: 'IPL 2024 winning Moment: When KKR lifted 3rd title',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T6TryJ_lYdqfBnoBUoyOvE0eP8p2Qz_NLw&s',
    alt: 'Image 2',
    caption: 'TATA IPL 2024: TOP MOMENTS',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUy99FWc-jWhl3P9r781-SpCeZn6wBcKH5w&s',
    alt: 'Image 3',
    caption: 'MS DHONI: THE MAN, THE MYTH, THE MAHI',
  },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Images */}
      <div className="overflow-hidden rounded-lg h-[90vh]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto"
        />
        {/* Text at Bottom Left Corner */}
        <div className="absolute bottom-[25vh] left-[10vw] w-[30vw] p-4 bg-opacity-50 text-white font-serif font-bold">
          <h3 className="text-[4vh] font-bold">
            {images[currentIndex].caption}
          </h3>
          <div className="font-serif">
              27 MAY ,2024 | 02.00 min | 105.7 k Views
            </div>
          <button className="bg-orange-600 h-[5vh] w-[10vw] mt-5 hover:bg-slate-100">
            
            <div className="font-serif hover:text-orange-600">
              &#10095; PLAY
            </div>
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[5vh] bg-opacity-50 text-white px-4 py-2 rounded-r-lg focus:outline-none"
      >
        &#10094; {/* Left Arrow Icon */}
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[5vh] bg-opacity-50 text-white px-4 py-2 rounded-l-lg focus:outline-none"
      >
        &#10095; {/* Right Arrow Icon */}
      </button>
    </div>
  );
};

export default CarouselComponent;
