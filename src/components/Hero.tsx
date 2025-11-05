"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const companies = [
    "Lunes L1 Protocol",
    "Azion Edge Platform",
    "Clear Sale",
    "Central Bank of Brazil",
    "Stellar Network",
    "NearX Education Platform",
  ];

  const images = [
    "/blockchainrio.jpg",
    "/mentor-meridian.jpg",
    "/meridian-friends.jpg",
    "/posgrad.jpg",
  ];

  const world = ["imagination", "vision", "idea", "dream", "spark"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(world[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % world.length;
          setDisplayWord(world[nextIndex]);
          return nextIndex;
        });
        setIsTransitioning(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .word-transition {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .word-transition.transitioning {
          opacity: 0;
          transform: translateY(-10px);
        }
        .gradient-text {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .image-fade {
          transition: opacity 0.8s ease-in-out;
        }
        @keyframes bounce-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
        .thumbnail {
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          opacity: 0.6;
          border: 2px solid transparent;
        }
        .thumbnail:hover {
          opacity: 0.8;
          transform: scale(1.05);
        }
        .thumbnail.active {
          opacity: 1;
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
        .carousel-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .thumbnail-container {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <header className="relative z-20 p-6">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                olivmath
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 h-full min-h-[calc(100vh-200px)]">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              from{" "}
              <span
                className={`word-transition gradient-text inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
                  isTransitioning ? "transitioning" : ""
                }`}
              >
                {displayWord}
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              to mainnet
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Over +5 years of experience architecting, building, and securing
              blockchain products. My approach is anchored in: Security-Development Lifecycle, Teamwork
              and share Knowledge.
            </p>

          </div>

          {/* Right Side - Carousel */}
          <div className="hidden lg:flex flex-1 justify-center items-center ml-12">
            <div className="carousel-container">
              {/* Main Image */}
              <div className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border-2 border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl">
                <Image
                  src={images[currentImageIndex]}
                  alt="Portfolio"
                  width={384}
                  height={384}
                  className="image-fade w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="thumbnail-container">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`thumbnail rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index
                        ? "active border-white/80"
                        : "border-white/20"
                    }`}
                    aria-label={`Image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Indicators Dots */}
              <div className="flex gap-2 mt-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator removed as requested */}

        {/* Companies Marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm py-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="mx-12 text-white/70 font-semibold text-xl lg:text-2xl shrink-0"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
