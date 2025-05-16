import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaLightbulb, FaServer, FaChalkboardTeacher } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Web Development",
    desc: "Custom, scalable websites using the latest tech stack tailored to your business needs.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Mobile App Development",
    desc: "High-performance Android/iOS apps with intuitive design and seamless performance.",
  },
  {
    icon: <FaCloud className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Cloud Services",
    desc: "Secure, scalable cloud infrastructure deployment and management using AWS, Azure, or GCP.",
  },
  {
    icon: <FaLightbulb className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Startup MVPs",
    desc: "Fast-track your startup idea into a live MVP. Agile, affordable, and investor-ready.",
  },
  {
    icon: <FaServer className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Backend Systems",
    desc: "Robust APIs, microservices, and database systems that power your digital solutions.",
  },
  {
    icon: <FaChalkboardTeacher className="text-indigo-500 w-10 h-10 mb-4" />,
    title: "Tech Consulting",
    desc: "Get expert guidance on architecture, scalability, performance, and hiring the right team.",
  },
];

// Container animation for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            At Inviduka, we provide cutting-edge software solutions that empower businesses and startups to scale and thrive.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 text-center cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-transform transform"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
