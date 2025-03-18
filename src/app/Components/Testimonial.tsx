"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Solar Engineer",
    rating: 5,
    review:
      "Khushali Solar Energy transformed my home with their efficient solar panel installation. Now, I enjoy reduced electricity bills and a greener future!",
    image: "/a6.jpg",
    score: 98,
  },
  {
    name: "Pooja Verma",
    role: "Renewable Energy Consultant",
    rating: 5,
    review:
      "Excellent service! The team was professional, and the solar audit helped us optimize energy consumption for our business.",
    image: "/a5.jpg",
    score: 97,
  },
  {
    name: "Amit Gupta",
    role: "Eco-conscious Homeowner",
    rating: 5,
    review:
      "Switching to solar was the best decision! The installation was seamless, and I see a significant drop in energy costs.",
    image: "/a4.jpg",
    score: 99,
  },
  {
    name: "Neha Joshi",
    role: "Environmental Activist",
    rating: 5,
    review:
      "Reliable and sustainable energy solutions! Khushali Solar Energy’s expertise in solar audits is commendable.",
    image: "/a3.jpg",
    score: 96,
  },
  {
    name: "Vikram Singh",
    role: "Factory Owner",
    rating: 5,
    review:
      "Our factory now runs on solar power! The ROI is amazing, and we’re proud to contribute to sustainability.",
    image: "/a2.jpg",
    score: 95,
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container mx-auto max-w-6xl px-6 py-6 h-[450px] sm:mb-0 mb-52">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-blue-600 pb-3 font-bold">CLIENT&apos;S TESTIMONIAL</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Solar Energy Audits And The Assessment
          </h2>
          <p className="text-gray-600 mt-4">
            Working with this company has been a game-changer for my business.
            Their expertise and innovative solutions are outstanding.
          </p>
          <div className="mt-6 flex items-center space-x-3">
            <div className="flex -space-x-2 overflow-hidden">
              <Image
                src="/a1.jpg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/a2.jpg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/a3.jpg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-gray-800 font-semibold">2,000+ Happy Clients</p>
          </div>
        </div>

        <div className="relative py-8 ">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                  <span className="ml-auto text-blue-500 text-2xl font-bold">
                    {testimonial.score}
                  </span>
                </div>
                <p className="text-gray-600 mt-4">{testimonial.review}</p>
                <div className="mt-4 flex space-x-1 text-yellow-500">
                {Array.from({ length: testimonial.rating }, () => "⭐")}
                </div>
                <p className="text-gray-400 text-sm mt-2">Reviews (05)</p>
              </div>
            ))}
          </Slider>

          <div className="absolute -bottom-10 right-0 flex space-x-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 bg-gray-300 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 bg-blue-500 text-white rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
