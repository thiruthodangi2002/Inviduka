import React from "react";

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-bold title-font mb-4 text-blue-900">
            OUR CORE TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the passionate minds behind <strong>Inviduka</strong> —
            builders, dreamers, and code warriors crafting the future of digital
            innovation in India.
          </p>
        </div>
        <div className="flex flex-wrap -m-6 justify-center">
          {[
            {
              name: "Thiru",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
              desc: "The visionary behind Inviduka. Driven by passion, grounded in purpose.",
            },
            {
              name: "Jayanth",
              role: "Co-Founder",
              img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
              desc: "Backbone of the tech stack. Problem-solver. Loyal teammate.",
            },
            {
              name: "Muralidhar",
              role: "Lead Programmer & SDM",
              img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
              desc: "Brings life to ideas through minimal and meaningful design.",
            },
            {
              name: "Bhargva Gupta",
              role: "Marketing Strategist",
              img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
              desc: "Spreading Inviduka’s vision through strategy and storytelling.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer
       "
            >
              <div className="h-full flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 ">
                <img
                  alt={member.name}
                  src={member.img}
                  className="rounded-full w-32 h-32 object-cover mb-6 transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <h2 className="title-font font-semibold text-lg text-gray-900">
                  {member.name}
                </h2>
                <h3 className="text-indigo-600 mb-2 font-medium">
                  {member.role}
                </h3>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
