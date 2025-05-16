import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for better text readability) */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="container mx-auto px-5 py-24 flex flex-col items-center justify-center text-center max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/4 w-full"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-md leading-tight tracking-tight">
            Inviduka
          </h1>
          <p className="mb-10 text-lg sm:text-xl leading-relaxed text-gray-100">
            Inviduka is a vision-first tech startup built to engineer bold ideas
            into impactful digital solutions. We specialize in fullstack
            development, product innovation, and creative problem-solving.
            <br />
            Whether you're a startup, a dreamer, or a growing business — we’re
            here to build what matters. Let’s engineer the future, together.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center text-white bg-blue-900 hover:bg-blue-800 focus:outline-none px-8 py-3 rounded-xl text-lg font-medium shadow-md transition duration-200"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center text-white border border-white hover:bg-white/10 focus:outline-none px-8 py-3 rounded-xl text-lg font-medium shadow-sm transition duration-200"
            >
              View Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
