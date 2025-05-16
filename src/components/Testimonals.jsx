import React from 'react';

const Testimonials = () => {
  return (
    <section className="text-gray-700 body-font bg-white py-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font text-blue-900 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-600">
            Hear from those who’ve trusted <strong>Inviduka</strong> for innovative tech solutions.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {[
            {
              name: "ARUN KUMAR",
              role: "Founder, TechWave",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
              testimonial:
                "Inviduka transformed our outdated platform into a seamless digital experience. Their team was responsive, professional, and delivered more than we expected.",
            },
            {
              name: "PRIYA SHARMA",
              role: "Product Manager, FinFlow",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              testimonial:
                "Working with Inviduka has been an absolute game changer. They truly understand the design thinking process and helped us launch our app in record time.",
            },
            {
              name: "RAHUL VERMA",
              role: "CTO, DataNest",
              img: "https://randomuser.me/api/portraits/men/85.jpg",
              testimonial:
                "Inviduka’s backend team is one of the best we’ve worked with. They understood our requirements deeply and ensured a secure and scalable solution.",
            },
          ].map((client, idx) => (
            <div
              key={idx}
              className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div
                className="h-full bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200
                           transition duration-300 ease-in-out hover:shadow-indigo-400 hover:border-indigo-400"
              >
                <img
                  alt={client.name}
                  src={client.img}
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full shadow-sm"
                />
                <p
                  className="leading-relaxed text-gray-700 mb-6 italic relative pl-8
                             before:absolute before:left-0 before:top-0 before:text-indigo-400 before:text-3xl before:content-['“']"
                >
                  {client.testimonial}
                </p>
                <h2 className="text-gray-900 font-semibold text-lg tracking-wide">{client.name}</h2>
                <p className="text-indigo-600 text-sm mt-1">{client.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
