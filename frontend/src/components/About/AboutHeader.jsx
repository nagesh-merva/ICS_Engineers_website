import React from "react";
import Navigation from "../other/Navigation";
import GetInTouch from "../other/GetInTouch";
import MainPic from "../../assets/photos/about-main.png";

const AboutHeader = () => {
  return (
    <div>
      <div className="relative flex flex-col w-full">
        <img
          loading="lazy"
          src={MainPic}
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex flex-col px-6 pt-6 pb-36 w-full bg-black bg-opacity-50 lg:px-20 lg:pt-10 lg:pb-36">
          <div className="flex flex-wrap gap-5 justify-between items-center w-full">
            <Navigation />
            <GetInTouch />
          </div>

          <div className="mt-12 lg:mt-16 text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-raleway font-bold">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
