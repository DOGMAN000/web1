import React from "react";
import kaiImg from "../assets/kai.png";
import dannyImg from "../assets/danny.png";
import ricardoImg from "../assets/ricardo.png";

const leadershipTeam = [
  { delay: 100, img: "https://media.licdn.com/dms/image/v2/D4E03AQFLGp7aJ-_ArA/profile-displayphoto-crop_800_800/B4EZf3OM4CGcAU-/0/1752199385007?e=1759968000&v=beta&t=4Q8btIdkYxpBgIO4mENG1HwLBNyAdm-q8rGWyX5mAOw", name: "Kai N" , dummyText: "Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb "},
  { delay: 300, img: "https://media.licdn.com/dms/image/v2/D4E03AQHcyNmlAm1BnQ/profile-displayphoto-shrink_400_400/B4EZYT9JffHYAg-/0/1744091519320?e=1759968000&v=beta&t=yksExMgSZfIiMIs9VF1z95B8FmPq7c3AgXImByhEwX0", name: "Danny A", dummyText: "Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb " },
  { delay: 400, img: "https://media.licdn.com/dms/image/v2/D5603AQEMUaQev2BYuQ/profile-displayphoto-shrink_400_400/B56ZckdZcCGsAk-/0/1748663375912?e=1759968000&v=beta&t=te6dl82SthGas7GM2Hp6ZGBBLMqjeLdQOPyrkrDUPWM", name: "Ricardo E", dummyText: "Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb Lorem Ispum Blurb "},
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
