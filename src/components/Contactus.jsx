import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_svc5v1n", // your Service ID
        "template_asxwo0p", // your Template ID
        form.current,
        "TClvfqrzHuKZejqA3" // your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <section className="min-h-screen bg-white px-5 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          Let's Talk
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We’d love to hear about your idea or project.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="john@example.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition font-medium"
          >
            Send Message
          </button>

          {/* Status messages */}
          {sent && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-600 text-center">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contactus;
