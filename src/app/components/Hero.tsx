import React from "react";
import leo from "@/assets/fav.jpg"
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative min-h-screen box bg-primary3 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-primary4/40"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary1/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary5/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary2/20 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:space-y-10">
           

            <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight">
              <span className="block text-gray-900">What's Good?</span>
              <span className="text-gray-700">I'm </span>
              <span className="">
                <span className="text-primary1"> Ogbaje Leo Arome,</span>
              </span>
              <span className="block text-gray-700">
                a{" "}
                <span className="text-primary1">Full-Stack Web Developer</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-xl leading-relaxed max-w-2xl text-gray-600">
              I'm passionate about building end-to-end web solutions that
              combine beautiful user interfaces with robust backend systems.
              With expertise in both frontend and backend technologies, I create
              scalable web applications that deliver exceptional user
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-primary1 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary1/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                Let's Work Together
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 flex items-center justify-center gap-3">
                View My Work
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Modern Image Display */}
          <div className="relative">
          
            {/* Main Image Container */}
            <div className="relative bg-transparent backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/30 ">
              {/* Profile Image with Modern Styling */}
              <div className="relative z-10 mb-8">
                <div className="relative w-56 h-56 lg:w-[380px] lg:h-[380px] mx-auto">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-primary1 rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full p-2">
                      <div className="w-full h-full rounded-full overflow-hidden ">
                        <Image
                          src={leo}
                          alt="Ogbaje Leo Arome"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-primary1 text-white px-4 py-2 rounded-full text-sm font-semibold flex gap-2 items-center shadow-lg">
                    <span className="size-2 rounded-full bg-green-300 animate-pulse "></span> Available
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
