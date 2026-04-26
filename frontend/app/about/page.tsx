"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { motion } from "framer-motion";

const About = () => {
  const cultureVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-play culture video programmatically
  useEffect(() => {
    const video = cultureVideoRef.current;
    if (video) {
      video.muted = true;
      video
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">

        {/* HERO WITH BACKGROUND VIDEO */}
        <section className="relative w-full h-[95vh] flex items-center justify-center text-center text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/servicesvideo/itparkvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          <div className="relative z-10 px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Empowering Businesses Through Intelligent Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Pioneering digital innovation since 2020, founded by Pramod Prajapat to transform businesses through cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  Our Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUR STORY - VERTICAL WAVE DESIGN */}
        <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to industry leadership, discover the journey that shaped Prasunet.
              </p>
            </motion.div>

            {/* Vertical Wave Timeline */}
            <div className="relative">
              {/* Central Wave Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-pink-500 to-indigo-500 transform -translate-x-1/2"></div>

              {/* Wave Content Items */}
              <div className="space-y-12">
                {/* Item 1 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200">
                      <h3 className="text-2xl font-bold text-indigo-900 mb-3">Founded in 2020</h3>
                      <p className="text-indigo-800 leading-relaxed">
                        Prasunet was founded in 2020 by Pramod Prajapat, a visionary entrepreneur with a passion for leveraging technology to solve real-world business challenges.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2020</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 2 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-200">
                      <h3 className="text-2xl font-bold text-pink-900 mb-3">First Enterprise Client</h3>
                      <p className="text-pink-800 leading-relaxed">
                        Our first major enterprise partnership marked the beginning of Prasunet's expansion into the corporate sector.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2021</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 3 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200">
                      <h3 className="text-2xl font-bold text-purple-900 mb-3">International Expansion</h3>
                      <p className="text-purple-800 leading-relaxed">
                        Expanded operations to multiple international markets, establishing our global presence across continents.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2022</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 4 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
                      <h3 className="text-2xl font-bold text-green-900 mb-3">AI & ML Division Launched</h3>
                      <p className="text-green-800 leading-relaxed">
                        Launched our dedicated AI and Machine Learning division to meet growing demand for intelligent solutions.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2023</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 5 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">500+ Projects Milestone</h3>
                      <p className="text-blue-800 leading-relaxed">
                        Successfully delivered over 500 enterprise projects, cementing our reputation as an industry leader.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2024</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 6 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
                      <h3 className="text-2xl font-bold text-amber-900 mb-3">Industry Recognition & Awards</h3>
                      <p className="text-amber-800 leading-relaxed">
                        Recognized with multiple industry awards and certifications, validating our excellence and commitment to quality.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2025</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Item 7 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-rose-200">
                      <h3 className="text-2xl font-bold text-rose-900 mb-3">Next Generation Tech Leadership</h3>
                      <p className="text-rose-800 leading-relaxed">
                        Pioneering emerging technologies including Web3, quantum computing integration, and advanced AI systems for tomorrow's challenges.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2026</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Wave Accent */}
            <div className="mt-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full p-1">
                  <div className="bg-white rounded-full px-8 py-4">
                    <p className="text-gray-900 font-semibold">
                      Continuing our journey of innovation and excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION - FULL SCREEN SECTIONS */}
        <section className="py-24 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* VISION SECTION - Full Screen */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/vision.webp"
                      alt="Our Vision"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                      Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Vision</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"></div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">
                    To be the global leader in digital transformation, empowering businesses of all sizes with innovative technology solutions that drive sustainable growth and create lasting impact in the digital economy.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Global Innovation</h4>
                        <p className="text-gray-600">Pioneering cutting-edge solutions across continents and industries.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Sustainable Growth</h4>
                        <p className="text-gray-600">Creating long-term value through responsible and ethical practices.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Digital Impact</h4>
                        <p className="text-gray-600">Transforming businesses and shaping the future of technology.</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                  >
                    Learn More About Our Vision
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* MISSION SECTION - Full Screen */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center lg:auto-cols-fr">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 lg:order-2"
                >
                  <div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                      Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"></div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">
                    To deliver exceptional technology services through innovation, integrity, and collaboration. We are committed to understanding our clients' unique challenges and providing tailored solutions that exceed expectations, while maintaining the highest standards of quality and professionalism.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Client-Centric Approach</h4>
                        <p className="text-gray-600">Every solution is designed with your specific needs and goals in mind.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Excellence & Quality</h4>
                        <p className="text-gray-600">Delivering high-quality solutions that stand the test of time.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Trusted Partnership</h4>
                        <p className="text-gray-600">Building lasting relationships based on transparency and mutual success.</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                  >
                    Learn More About Our Mission
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:order-1"
                >
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/mission.jpg"
                      alt="Our Mission"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-24 px-6 lg:px-24 bg-gradient-to-b from-white via-indigo-50 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Core Values Section */}
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Core Values</span></h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental principles that guide every decision and action we take
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-32 bg-gradient-to-br from-indigo-500 to-purple-500 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/business-innovation.jpg"
                    alt="Innovation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Innovation</h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    We embrace cutting-edge technologies and creative solutions to solve complex business challenges and stay ahead of industry trends.
                  </p>
                </div>
              </motion.div>

              {/* Integrity */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-32 bg-gradient-to-br from-pink-500 to-purple-500 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/businessintegrity.jpg"
                    alt="Integrity"
                    fill
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Integrity</h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    We uphold the highest ethical standards in all our dealings, ensuring transparency, trust, and accountability in every interaction.
                  </p>
                </div>
              </motion.div>

              {/* Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-32 bg-gradient-to-br from-green-500 to-emerald-500 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/businessexcellence.webp"
                    alt="Excellence"
                    fill
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Excellence</h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    We are committed to delivering superior quality in every project, consistently exceeding client expectations and industry standards.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMPANY STATISTICS - VERTICAL WAVE (LIKE OUR STORY) */}
        <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that showcase our commitment to excellence and client success.
              </p>
            </motion.div>

            {/* Vertical Wave Timeline */}
            <div className="relative">
              {/* Central Wave Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-pink-500 to-indigo-500 transform -translate-x-1/2"></div>

              {/* Wave Content Items */}
              <div className="space-y-12">
                {/* Stat 1 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200">
                      <h3 className="text-3xl font-bold text-indigo-900 mb-2">1000+</h3>
                      <p className="text-indigo-800 leading-relaxed">
                        Projects completed across diverse industries and geographies, delivering transformative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 2 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-200">
                      <h3 className="text-3xl font-bold text-pink-900 mb-2">100%</h3>
                      <p className="text-pink-800 leading-relaxed">
                        Client satisfaction rate, driven by our commitment to excellence and dedicated support.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 3 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
                      <h3 className="text-3xl font-bold text-green-900 mb-2">65+</h3>
                      <p className="text-green-800 leading-relaxed">
                        Countries served, providing global digital transformation and enterprise solutions.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 4 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200">
                      <h3 className="text-3xl font-bold text-purple-900 mb-2">1000+</h3>
                      <p className="text-purple-800 leading-relaxed">
                        Happy clients partnering with us for long-term success and digital growth initiatives.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">4</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 5 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                      <h3 className="text-3xl font-bold text-blue-900 mb-2">24/7</h3>
                      <p className="text-blue-800 leading-relaxed">
                        Round-the-clock support ensuring continuous assistance for all your digital needs.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">5</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 6 - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex lg:flex-row-reverse flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-left">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-200">
                      <h3 className="text-3xl font-bold text-red-900 mb-2">5+</h3>
                      <p className="text-red-800 leading-relaxed">
                        Years of proven experience delivering innovative solutions and industry expertise.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">6</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>

                {/* Stat 7 - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex lg:flex-row flex-col items-center gap-8"
                >
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-teal-200">
                      <h3 className="text-3xl font-bold text-teal-900 mb-2">100%</h3>
                      <p className="text-teal-800 leading-relaxed">
                        Uptime guarantee ensuring your services remain available and performant always.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-auto flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                      <span className="text-white font-bold text-2xl">7</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-16"></div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Wave Accent */}
            <div className="mt-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full p-1">
                  <div className="bg-white rounded-full px-8 py-4">
                    <p className="text-gray-900 font-semibold">
                      Measuring success through results and client partnerships
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CULTURE & VALUES VIDEO */}
        <section className="py-20 px-6 lg:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Culture</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where innovation meets collaboration, and every team member contributes to our shared success.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">What Drives Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Innovation First</h4>
                        <p className="text-gray-300">We constantly explore new technologies and methodologies to stay ahead of industry trends.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Client Partnership</h4>
                        <p className="text-gray-300">We view our clients as partners, working closely to achieve their goals and celebrate their success.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                        <p className="text-gray-300">We invest in our team&apos;s growth and encourage a culture of lifelong learning and skill development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                  <video
                    ref={cultureVideoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-96 object-cover"
                  >
                    <source src="/workculture.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-medium">
                      &quot;Our culture is the foundation of our success&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE & ACHIEVEMENTS - CONNECTING NODES */}
        <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Expertise Network</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interconnected capabilities delivering comprehensive technology solutions across all industries.
              </p>
            </motion.div>

            {/* Expertise Nodes Network */}
            <div className="relative h-[900px] lg:h-[1000px] flex items-center justify-center">
              {/* SVG Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.1))" }}
              >
                {/* Lines connecting nodes */}
                <line x1="50%" y1="50%" x2="20%" y2="5%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="50%" x2="80%" y2="5%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="50%" x2="15%" y2="48%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="50%" x2="85%" y2="48%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="50%" x2="15%" y2="95%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="50%" y1="50%" x2="85%" y2="95%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="20%" y1="5%" x2="15%" y2="48%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <line x1="80%" y1="5%" x2="85%" y2="48%" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Node - Core */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                whileHover={{ scale: 1.15 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-full flex flex-col items-center justify-center shadow-2xl cursor-pointer group">
                    <p className="text-white text-lg font-bold">Core</p>
                    <p className="text-white/80 text-xs">Capabilities</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 1 - Top Left */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[5%] left-[20%] z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-blue-300 hover:border-blue-600 transition-colors">
                    <p className="text-blue-900 text-sm font-bold text-center">Cloud</p>
                    <p className="text-blue-600 text-xs text-center">Solutions</p>
                  </div>
                  <div className="mt-4 text-center bg-blue-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-200">
                    <p className="text-blue-900 text-xs font-semibold">AWS • Azure • GCP</p>
                    <p className="text-blue-700 text-xs mt-1">Migration • Optimization</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 2 - Top Right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[5%] right-[20%] z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-purple-300 hover:border-purple-600 transition-colors">
                    <p className="text-purple-900 text-sm font-bold text-center">AI & ML</p>
                    <p className="text-purple-600 text-xs text-center">Intelligence</p>
                  </div>
                  <div className="mt-4 text-center bg-purple-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-200">
                    <p className="text-purple-900 text-xs font-semibold">Deep Learning • NLP</p>
                    <p className="text-purple-700 text-xs mt-1">Computer Vision • Analytics</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 3 - Middle Left */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[48%] left-[15%] z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-amber-300 hover:border-amber-600 transition-colors">
                    <p className="text-amber-900 text-sm font-bold text-center">Security</p>
                    <p className="text-amber-600 text-xs text-center">Compliance</p>
                  </div>
                  <div className="mt-2 text-center bg-amber-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-amber-200">
                    <p className="text-amber-900 text-xs font-semibold">ISO 27001 • Penetration Testing</p>
                    <p className="text-amber-700 text-xs mt-1">Threat Detection • Encryption</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 4 - Middle Right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[48%] right-[15%] z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-green-300 hover:border-green-600 transition-colors">
                    <p className="text-green-900 text-sm font-bold text-center">DevOps</p>
                    <p className="text-green-600 text-xs text-center">Automation</p>
                  </div>
                  <div className="mt-2 text-center bg-green-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-200">
                    <p className="text-green-900 text-xs font-semibold">CI/CD • Kubernetes</p>
                    <p className="text-green-700 text-xs mt-1">Docker • Monitoring • IaC</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 5 - Bottom Left */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-0 left-[15%] z-10"
              >
                <div className="flex flex-col-reverse items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-red-300 hover:border-red-600 transition-colors">
                    <p className="text-red-900 text-sm font-bold text-center">Blockchain</p>
                    <p className="text-red-600 text-xs text-center">Web3</p>
                  </div>
                  <div className="mb-4 text-center bg-red-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-200">
                    <p className="text-red-900 text-xs font-semibold">Smart Contracts • Solidity</p>
                    <p className="text-red-700 text-xs mt-1">DeFi • NFT • Layer 2</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 6 - Bottom Right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-0 right-[15%] z-10"
              >
                <div className="flex flex-col-reverse items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-indigo-300 hover:border-indigo-600 transition-colors">
                    <p className="text-indigo-900 text-sm font-bold text-center">Data</p>
                    <p className="text-indigo-600 text-xs text-center">Analytics</p>
                  </div>
                  <div className="mb-4 text-center bg-indigo-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-indigo-200">
                    <p className="text-indigo-900 text-xs font-semibold">BI • Data Warehouse</p>
                    <p className="text-indigo-700 text-xs mt-1">ETL • Big Data • Visualization</p>
                  </div>
                </div>
              </motion.div>

              {/* Node 7 - Bottom Center */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="flex flex-col-reverse items-center">
                  <div className="relative w-28 h-28 bg-gradient-to-br from-pink-50 to-pink-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-pink-300 hover:border-pink-600 transition-colors">
                    <p className="text-pink-900 text-sm font-bold text-center">Integration</p>
                    <p className="text-pink-600 text-xs text-center">APIs</p>
                  </div>
                  <div className="mb-4 text-center bg-pink-50/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-pink-200">
                    <p className="text-pink-900 text-xs font-semibold">Microservices • REST/GraphQL</p>
                    <p className="text-pink-700 text-xs mt-1">Message Queues • Event-Driven</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-gray-600">Successful Projects Delivered</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-gray-600">Countries Global Presence</p>
              </motion.div>
            </div>
          </div>
        </section>

       
        {/* CLIENT TESTIMONIALS */}
        <section className="py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from satisfied clients who have experienced the Prasunet difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                  testimonial: "Prasunet's AI solutions transformed our data processing capabilities, resulting in a 40% efficiency improvement. Their team's expertise is unmatched.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "CTO, InnovateCorp",
                  testimonial: "The mobile app they developed exceeded our expectations. User engagement increased by 300% within the first quarter. Highly recommended.",
                  rating: 5
                },
                {
                  name: "Emily Davis",
                  role: "Director, GlobalTech",
                  testimonial: "Outstanding cybersecurity implementation. Their proactive approach gave us complete peace of mind. Professional and reliable service.",
                  rating: 5
                },
                {
                  name: "David Wilson",
                  role: "Founder, StartupHub",
                  testimonial: "From concept to launch, Prasunet guided us through every step. Their strategic insights were instrumental in our success.",
                  rating: 5
                },
                {
                  name: "Lisa Rodriguez",
                  role: "VP Operations, LogiFlow",
                  testimonial: "Seamless cloud migration with zero downtime. Their expertise saved us both time and costs. Exceptional service quality.",
                  rating: 5
                },
                {
                  name: "James Park",
                  role: "Product Manager, DesignCo",
                  testimonial: "The UI/UX design team created an intuitive interface that our users love. The attention to detail made all the difference.",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.testimonial}&rdquo;</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;
