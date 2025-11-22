import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AuthLeftSide = () => {
  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Reference to the Swiper instance for programmatic control
  const swiperRef = useRef(null);

  // Slide data - same content as before
  const slides = [
    {
      id: 1,
      title: "Statistics Dashboard",
      description:
        "Track your financial metrics with detailed analytics and insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Analytics Reports",
      description: "Generate comprehensive reports for better decision making.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Data Management",
      description: "Organize and manage your financial data efficiently.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    },
  ];

  // Handle custom pagination dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // Handle slide change event from Swiper
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background decorative circles */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-blue-300 rounded-full opacity-30"></div>
      <div className="absolute top-27 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-40"></div>

      {/* Main content container */}
      <div className="flex flex-col justify-center items-center w-full z-10 px-16">
        {/* Logo and branding section */}
        <div className="flex items-center mb-20">
          <img src="logo.png" className="w-14"/>
          <h1 className="text-3xl font-bold">TrackTap</h1>
        </div>

        {/* Swiper Carousel Container */}
        <div className="w-full max-w-sm mb-8">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000, // Auto-slide every 4 seconds
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            loop={true} // Enable infinite loop
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="p-1">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Image container with animation */}
                    <motion.div
                      className="w-72 h-48 rounded-2xl overflow-hidden shadow-lg bg-white"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Slide content - title and description */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg text-gray-600 max-w-md mx-auto">
                        {slide.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots (3 lines below images) */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "w-15 bg-blue-600" // Active dot - longer and blue
                    : "w-8 bg-gray-300 hover:bg-gray-400" // Inactive dots - shorter and gray
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional descriptive text */}
        <motion.p
          className="text-center text-sm text-gray-600 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Let's see what we have new, check it out! So maybe write here
          something more.
        </motion.p>
      </div>
    </div>
  );
};

export default AuthLeftSide;