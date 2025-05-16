import React from "react";

const Contactus = () => {
  return (
    <section className="text-gray-700 body-font relative bg-white min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-blue-900 mb-4">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto text-base leading-relaxed text-gray-600">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-700 py-2 px-4 transition duration-200 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-700 py-2 px-4 transition duration-200 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or how we can help..."
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-36 text-gray-700 py-2 px-4 resize-none transition duration-200 outline-none"
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto bg-indigo-600 text-white font-semibold py-2 px-10 rounded-full hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </div>

            {/* Footer Info */}
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                href="mailto:contact@inviduka.com"
                className="text-indigo-500 font-medium hover:underline"
              >
                contact@inviduka.com
              </a>
              <p className="leading-relaxed my-4 text-sm text-gray-600">
                Inviduka Pvt Ltd
                <br />
                Banjara Hills, Hyderabad, Telangana, India – 500034
              </p>

              {/* Social Media Icons */}
              <div className="inline-flex space-x-4 mt-4 justify-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1a10.66 10.66 0 01-9-4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-indigo-600"
                >
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6A8.38 8.38 0 0112 3h.5a8.5 8.5 0 018 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
