import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_svc5v1n",        // ✅ Your Service ID
        "template_np3qpwm",       // ✅ Your Template ID
        formRef.current,
        "TClvfqrzHuKZejqA3"       // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-8 py-10 sm:px-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-10">
            We'd love to hear from you. Please fill out the form below and we’ll get back to you shortly.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Hidden field for to_name */}
            <input type="hidden" name="to_name" value="Inviduka Team" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {status && (
              <p className={`text-center text-sm font-medium ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-8 rounded-full transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-gray-500 text-sm">
            <p>Inviduka Pvt Ltd</p>
            <p>Banjara Hills, Hyderabad, India – 500034</p>
            <a href="mailto:contact@inviduka.com" className="text-blue-600 hover:underline">
              contact@inviduka.com
            </a>

            <div className="flex justify-center gap-6 mt-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <i className={`fab fa-${platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
