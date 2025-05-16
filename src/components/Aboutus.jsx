import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Aboutus() {
  return (
    <section className="text-gray-700 body-font bg-white min-h-screen">
      <div className="container mx-auto px-5 py-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-900 mb-4">
            About Inviduka
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
            At Inviduka, we are passionate about transforming ideas into
            innovative digital experiences. We blend creativity and
            technology to empower businesses and communities across India and beyond.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            {
              title: "Our Mission",
              content:
                "To build scalable and user-friendly software solutions that accelerate growth and enable seamless digital transformation for businesses of all sizes.",
            },
            {
              title: "Our Vision",
              content:
                "To be a trusted partner for innovation, driving progress by delivering technology solutions inspired by the unique spirit of India.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Integrity",
                desc: "We uphold transparency, honesty, and ethical practices in everything we do.",
              },
              {
                title: "Innovation",
                desc: "We foster creativity and embrace cutting-edge technologies.",
              },
              {
                title: "Customer Centricity",
                desc: "Our clients’ success is our top priority and motivation.",
              },
              {
                title: "Collaboration",
                desc: "We believe in teamwork and collective growth.",
              },
              {
                title: "Excellence",
                desc: "Delivering high-quality products with attention to detail.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="max-w-xs bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-indigo-200 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to build with us?
          </h2>
          <p className="text-gray-700 mb-6">
            Contact Inviduka today and let’s create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Aboutus;
