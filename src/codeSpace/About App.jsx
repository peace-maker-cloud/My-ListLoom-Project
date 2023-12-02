import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutApp = () => {
  const carouselContent = [
    {
      title: "Mobile-First Task Management",
      description:
        "ListLoom is your mobile companion for seamless task management. Designed with a mobile-first approach, it empowers users to effortlessly organize and complete their daily tasks directly from their smartphones, ensuring accessibility for everyone.",
    },
    {
      title: "Daily Work, No Compromise",
      description:
        "Elevate your productivity with ListLoom, a dedicated task management app focused on helping individuals conquer their daily goals. Whether you're on the go or at home, ListLoom ensures that your tasks are at your fingertips, making productivity a part of your daily routine.",
    },
    {
      title: "Your Personal Task Partner",
      description:
        "Experience the simplicity of ListLoom as it becomes your personal task partner. From quick task additions to comprehensive list management, ListLoom is designed to make task completion intuitive, making it the go-to app for those who aim to meet their daily objectives with ease.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="p-4">
      <div>
        <h1>About the App...</h1>
      </div>
      <div className=" bg-white h-[55%] m-1 p-2 rounded-lg">
        <Slider {...settings}>
          {carouselContent.map((item, index) => (
            <div key={index}>
              <h1 className="text-cyan-600 font-serif">{item.title}</h1>
              <p className="m-3">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
