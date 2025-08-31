import React from "react";
import kaiImg from "../assets/kai.png";
import dannyImg from "../assets/danny.png";
import ricardoImg from "../assets/ricardo.png";

// Sample data
const leadershipTeam = [
  { img: kaiImg, name: "Kai N" },
  { img: dannyImg, name: "Danny A" },
  { img: ricardoImg, name: "Ricardo E" },
];

const Leadership = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-center gap-8">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col items-center w-40">
              <img
                src={leader.img}
                alt={leader.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {leader.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
