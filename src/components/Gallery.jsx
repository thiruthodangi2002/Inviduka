import React, { useState, useEffect, useRef } from "react";

const galleryItems = [
  {
    title: "Foundation Phase",
    subtitle: "The Vision Takes Shape",
    description:
      "Inviduka was born from a dream to innovate and impact. A spark of inspiration led to our purpose-driven mission. Here's where it all began, one step at a time. The foundation laid the groundwork for everything to come.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Growth Journey",
    subtitle: "Steps to Scale",
    description:
      "From the first client to a growing family of believers, we faced challenges, celebrated wins, and kept moving. Each step built resilience and expanded our reach. Today, that journey continues stronger than ever.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Work Culture",
    subtitle: "Driven by Passion",
    description:
      "Innovation thrives where people feel inspired. Our culture is built on respect, collaboration, and growth. Here, passion fuels progress every day. The bonds within the team drive creativity and courage.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Milestones",
    subtitle: "Proud Moments",
    description:
      "Each milestone is a reflection of dedication and vision. We celebrate not just success, but the journey behind it. These moments remind us of how far we've come—and how much further we're ready to go.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
];

function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  function goToPrevious() {
    resetTimeout();
    setCurrentIndex(
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    );
  }

  function goToNext() {
    resetTimeout();
    setCurrentIndex(
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <section className="bg-white py-16 w-full">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">
          Glimpses of Inviduka
        </h2>
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full p-6"
                aria-hidden={currentIndex !== idx}
              >
                <div className="rounded-lg overflow-hidden shadow-md bg-white min-h-[500px] md:min-h-[550px] flex flex-col">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-indigo-600 text-sm font-semibold uppercase mb-1">
                        {item.subtitle}
                      </h3>
                      <h1 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="text-gray-700 text-base whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-indigo-600 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-indigo-600 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallerySlider;
