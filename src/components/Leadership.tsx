import React from "react";
import kaiImg from "../assets/kaiPfp.jpeg";
import dannyImg from "../assets/dannyPfp.jpeg";
import ricardoImg from "../assets/ricardoPfp.jpeg";

const leadershipTeam = [
  { delay: 100, img: kaiImg, name: "Kai N" , dummyText: "Head of Operations"},
  { delay: 300, img: dannyImg, name: "Danny A", dummyText: "Head of Engineering" },
  { delay: 400, img: ricardoImg, name: "Ricardo E", dummyText: "Head of Logistics"},
];

const Leadership = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-20">
          {leadershipTeam.map((leader, index) => (
            <div data-aos="fade-up" data-aos-delay={leader.delay} key={index} className="p-10 hover-card flex flex-col items-center w-80">
              <img
                src={leader.img}
                alt={leader.name}
                className="w-60 aspect-square object-cover rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {leader.name}
              </h3>
              {leader.dummyText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
