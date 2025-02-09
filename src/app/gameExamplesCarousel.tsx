"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GameExamplesCarousel = () => {
  const examples = [
    {
      id: 1,
      image: "./build.png",
      title: "Building Capabilities",
      alt: "Agent building example"
    },
    {
      id: 2,
      image: "./EquipmentSharing.png",
      title: "Equipment Sharing",
      alt: "Equipment sharing example"
    },
    {
      id: 3,
      image: "./hunting.png",
      title: "Hunting and Combat",
      alt: "Hunting example"
    },
    {
      id: 4,
      image: "./longterm.png",
      title: "Long Term Planning",
      alt: "Planning example"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(examples.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold mb-6">In-game Examples</h3>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((example) => (
              <div
                key={example.id}
                className="aspect-video relative bg-gray-900/50 rounded-xl overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <Image
                    src={example.image}
                    alt={example.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium z-10">
                  {example.title}
                </p>
              </div>
            ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-6 bg-blue-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameExamplesCarousel;