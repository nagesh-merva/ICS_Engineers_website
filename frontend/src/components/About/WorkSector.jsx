import React from "react";

const WorkSector = () => {
  const sectors = [
    {
      id: 1,
      title: "Education",
      description: "BITS Pilani Goa Campus, Mushtifund School Complex",
    },
    {
      id: 2,
      title: "Hospitality",
      description: "Grand Hyatt, Goa La Vida, I Love Bell Bottoms",
    },
    {
      id: 3,
      title: "Healthcare",
      description: "GMC Bambolim, Platicare Hospital",
    },
    {
      id: 4,
      title: "Industry",
      description: "Zuari Agro Chemicals, Siemens, Sanofi Synthelabo",
    },
    {
      id: 5,
      title: "Residential",
      description: "Alcon Constructions, Sunit Woods",
    },
    {
      id: 6,
      title: "Commercial",
      description: "Nanu Estate, Sunit Woods, Agri Bazar at Ponda Market",
    },
    {
      id: 7,
      title: "Automobile",
      description: "Mercedes Benz, Hyundai",
    },
    {
      id: 8,
      title: "Entertainment",
      description: "Projects like IFFI Goa 2004",
    },
    {
      id: 9,
      title: "Public Utility",
      description: "GSIDC Goa, GMC Library, Central Library, SPACES Building.",
    },
    {
      id: 10,
      title: "Community",
      description: "Agri Bazar at Ponda Market Yard, Agricultural Board.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-2/4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-3">
            Sectors We Work In
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            Over the years, ICS Engineers has delivered impactful solutions
            across:
          </p>
        </div>

        <div className="w-full lg:w-2/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sectors.map((sector) => (
              <div key={sector.id} className="flex gap-4">
                <div className="min-w-[25px] md:min-w-[30px] font-bold text-[#1e3a8a]">
                  {sector.id}.
                </div>
                <div>
                  <h3 className="font-bold text-xl md:text-3xl mb-1">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 text-md">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSector;
