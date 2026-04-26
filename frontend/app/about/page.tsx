"use client";
import React, { useState, useRef, useEffect } from "react";
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

        {/* VISION & MISSION */}
        <section className="py-24 px-6 lg:px-24 bg-gradient-to-b from-white via-indigo-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Vision & Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that drive our commitment to excellence and innovation
              </p>
            </motion.div>

            {/* Vision & Mission Professional Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-40 bg-gradient-to-br from-indigo-500 to-indigo-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 group-hover:scale-110 transition-transform duration-300 text-5xl">
                      👁️
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To be the global leader in digital transformation, empowering businesses of all sizes with innovative technology solutions that drive sustainable growth and create lasting impact in the digital economy.
                  </p>
                  <button className="text-indigo-600 font-semibold flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-40 bg-gradient-to-br from-pink-500 to-pink-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 group-hover:scale-110 transition-transform duration-300 text-5xl">
                      🎯
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To deliver exceptional technology services through innovation, integrity, and collaboration. We are committed to understanding our clients&apos; unique challenges and providing tailored solutions that exceed expectations.
                  </p>
                  <button className="text-pink-600 font-semibold flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>

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
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    💡
                  </div>
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
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    🛡️
                  </div>
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
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    ⭐
                  </div>
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

        {/* COMPANY STATISTICS */}
        <section className="py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Impact</span> in Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable results that showcase our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Completed", color: "from-indigo-500 to-indigo-600" },
                { number: "98%", label: "Client Satisfaction", color: "from-pink-500 to-pink-600" },
                { number: "50+", label: "Countries Served", color: "from-green-500 to-green-600" },
                { number: "1000+", label: "Happy Clients", color: "from-purple-500 to-purple-600" },
                { number: "24/7", label: "Support Available", color: "from-blue-500 to-blue-600" },
                { number: "5+", label: "Years Experience", color: "from-red-500 to-red-600" },
                { number: "200+", label: "Expert Team Members", color: "from-yellow-500 to-yellow-600" },
                { number: "99.9%", label: "Uptime Guarantee", color: "from-teal-500 to-teal-600" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center group"
                >
                  <div className={`bg-gradient-to-r ${stat.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/90 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
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

        {/* EXPERTISE & ACHIEVEMENTS */}
        <section className="py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions backed by industry certifications and proven methodologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Technical Proficiency</h3>
                <p className="text-indigo-800 mb-6 leading-relaxed">
                  Our certified professionals bring extensive experience across the latest technologies, ensuring we deliver solutions that are both innovative and reliable.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-indigo-800">AWS, Azure, and Google Cloud certified</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-indigo-800">AI/ML and data science expertise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-indigo-800">Cybersecurity and compliance standards</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-indigo-800">Agile and DevOps methodologies</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-pink-900 mb-6">Industry Recognition</h3>
                <p className="text-pink-800 mb-6 leading-relaxed">
                  Our commitment to excellence has earned us recognition from industry leaders and the trust of clients worldwide.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-pink-800">ISO 27001 certified for information security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-pink-800">500+ successful project deliveries</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-pink-800">98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-pink-800">Global presence across 50+ countries</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-20 px-6 lg:px-24 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Custom web applications built with modern technologies for optimal performance and user experience.",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications that engage users and drive business results.",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  title: "AI & Data Solutions",
                  description: "Intelligent solutions powered by artificial intelligence and advanced data analytics.",
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Cloud Services",
                  description: "Scalable cloud infrastructure and migration services for enhanced flexibility and cost efficiency.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "UI/UX Design",
                  description: "User-centered design solutions that create intuitive and engaging digital experiences.",
                  color: "from-red-500 to-red-600"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
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
