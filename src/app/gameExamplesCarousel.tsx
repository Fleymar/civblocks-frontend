"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GameExamplesCarousel = () => {
  const examples = [
    {
      id: 1,
      image: "./next.svg",
      title: "Building Capabilities",
      alt: "Agent building example"
    },
    {
      id: 2,
      image: "./globe.svg",
      title: "Resource Management",
      alt: "Resource gathering example"
    },
    {
      id: 3,
      image: "./vercel.svg",
      title: "Combat System",
      alt: "Combat example"
    },
    {
      id: 4,
      image: "./flowchart.png",
      title: "Village Interaction",
      alt: "Village interaction example"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(examples.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000); 

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="bg-green-800/50 p-6 rounded-lg border-2 border-green-700">
      <h3 className="text-xl font-bold mb-4">In-game Examples</h3>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((example) => (
              <div
                key={example.id}
                className="aspect-video relative bg-green-900/50 rounded-lg overflow-hidden transition-opacity duration-500"
              >
                <Image
                  src={example.image}
                  alt={example.alt}
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm">
                  {example.title}
                </p>
              </div>
            ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-green-400 w-4"
                  : "bg-green-600 hover:bg-green-500"
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