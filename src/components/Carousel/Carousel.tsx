// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div
      className="slick-arrow absolute top-[50%] cursor-pointer bg-white p-3 rounded-full shadow-2xl"
      style={{
        right: "10px",
        zIndex: 999,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div
      className="slick-arrow absolute top-[50%] cursor-pointer bg-white p-3 rounded-full shadow-2xl"
      style={{ left: "10px", zIndex: 1, top: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1.5,
    autoplay: false,
    speed: 1000,
    dots: true,

    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow onClick={function (): void {}} />,
    prevArrow: <PrevArrow onClick={function (): void {}} />,
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="h-[300px] w-[280px] p-4 object-cover">
          <Image
            alt=""
            width={300}
            height={300}
            src={image}
            className="object-cover aspect-square"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
