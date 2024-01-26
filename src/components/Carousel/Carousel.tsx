// Carousel.tsx
import React from "react";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1.5,
    autoplay: true,
    speed: 1000,
    arrows: true,

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
