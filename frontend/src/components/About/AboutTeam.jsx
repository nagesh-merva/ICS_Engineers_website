import React from "react";
import { FaCircle } from "react-icons/fa";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Samir Khawte",
      position: "Lead Consultant",
      image: "/placeholder-image-1.jpg",
    },
    {
      name: "Sandeep Phadke",
      position: "Associate Consultant (Electrical)",
      image: "/placeholder-image-2.jpg",
    },
    {
      name: "Suraj Marathe",
      position: "Sr. Electrical Engineer",
      image: "/placeholder-image-3.jpg",
    },
  ];

  return (
    <div className="min-w-full px-4 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mx-auto px-2 py-1 rounded-full shadow-md text-base font-raleway font-bold text-neutral-500 max-w-fit bg-white">
          <FaCircle size={10} className="text-orange-500 mx-2" />
          <div className="text-center">Our Team</div>
          <FaCircle size={10} className="text-orange-500 mx-2" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          <span className="text-orange-500">Team</span>
          <span className="text-[#1e3a8a]"> Members</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/3 max-w-sm mx-auto"
          >
            <div className="rounded-3xl bg-white shadow-lg overflow-hidden">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative -mt-12 mx-4">
              <div className="bg-orange-500 rounded-2xl p-4 text-center shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-white/90">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
