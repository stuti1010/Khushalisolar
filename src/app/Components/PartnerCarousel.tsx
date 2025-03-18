"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { id: 1, img: "/Adani-Solar.png", name: "Adani Solar" },
  { id: 2, img: "/Rayzon.png", name: "Rayzon" },
  { id: 3, img: "/Sunbond.jpg", name: "Sunbond" },
  { id: 4, img: "/TATAPOWER.png", name: "Tata Power" },
  { id: 5, img: "/mindra.png", name: "Mindra" },
  { id: 6, img: "/havells.png", name: "Havells" },
  { id: 7, img: "/polycab.png", name: "Polycab" },
];

const PartnerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, 
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
      { breakpoint: 768, settings: { slidesToShow: 2 } }, 
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true } }, 
    ],
  };

  return (
    <div className="container mx-auto md:pt-32  px-4 bg-white">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-8">
        Brands Powering Our Solar Solutions
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <div className="p-4">
                <Image 
                  src={partner.img} 
                  alt={partner.name} 
                  width={180}
                  height={180}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerCarousel;
