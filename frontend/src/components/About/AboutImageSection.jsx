import React from "react";
import AboutLargeImage from "../../assets/photos/about-1.png";
import AboutSmallImage from "../../assets/photos/about-2.png";

const AboutImageSection = () => {
  return (
    <div className="relative flex-start max-w-7xl mx-auto items-center justify-center p-6 bg-white rounded-lg shadow-md ">
      <div className="w-full h-full md:w-2/3">
        {/* Large Image */}
        <img
          src={AboutLargeImage}
          alt="Main Image"
          className="rounded-lg w-full"
        />
      </div>

      {/* Small Image */}
      <div className="absolute top-20 right-4 md:top-18 md:right-26 w-1/2">
        <img
          src={AboutSmallImage}
          alt="Small Image"
          className="rounded-lg shadow-lg border border-white"
        />
      </div>
    </div>
  );
};

export default AboutImageSection;
