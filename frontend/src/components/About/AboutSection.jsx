import React from "react";
import rocket from "/icons/rocket.png";
import badge from "/icons/badge.png";
import people from "/icons/people.png";
import { FaCircle } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      title: "Innovation",
      description:
        "Developing creative, efficient solutions for complex challenges.",
      icon: rocket,
      color: "rgba(226, 101, 55, 1)",
    },
    {
      title: "Excellence",
      description: "Delivering high-quality, reliable electrical services.",
      icon: badge,
      color: "rgba(38, 57, 124, 1)",
    },
    {
      title: "Client-Centricity",
      description:
        "Offering personalized service and clear, consistent communication.",
      icon: people,
      color: "rgba(226, 101, 55, 1)",
    },
  ];

  return (
    <div className="flex z-10 mx-3 flex-col self-center pt-14 pb-24 mt-[-100px] w-full bg-white sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1233px] max-md:max-w-ful">
      <div className="flex items-center justify-center md:justify-start mx-auto md:ml-6 px-2 py-1 rounded-full shadow-md text-base font-raleway font-bold text-neutral-500 max-w-fit">
        <FaCircle size={10} className="text-orange-500 mx-2" />
        <div className="text-center">About us</div>
        <FaCircle size={10} className="text-orange-500 mx-2" />
      </div>

      <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between mt-8 mb-12 space-y-6 md:space-y-0 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="text-orange-500">Empowering Innovation, </span>
          <span className="text-gray-800">Delivering Excellence</span>
        </h2>
        <div className="text-lg text-gray-600 space-y-4">
          <p>
            Founded in 2003 in Ponda-Goa, ICS Engineers provides tailored
            electrical solutions.
          </p>
          <p>We ensure excellence, safety, and timely project completion.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex-1 max-w-sm bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-6">
              <div
                className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center"
                style={{ backgroundColor: feature.color }}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
