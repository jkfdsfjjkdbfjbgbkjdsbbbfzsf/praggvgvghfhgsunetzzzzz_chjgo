"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import { latestNews } from "@/lib/news";
import Link from "next/link";
import Image from "next/image"; // ✅ Using next/image
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";

const TechNewsPage = () => {
   const newsItems = [
  {
    title: "Quantum Leap",
    description:
      "Global AI Summit 2025 announces processors with 1000+ qubits, redefining speed, accuracy, and next-gen computing.",
    image: "/quantum leap.jpeg", // replace with your image path
  },
  
  {
    title: "Global Impact",
    description:
      "World leaders discuss ethical AI, sustainability, and policies to shape a responsible digital future.",
    image: "/Impact of artificial intelligence.png",
  },
  {
    title: "Next-Gen Robotics",
    description:
      "Robotics breakthroughs integrate AI to perform complex tasks autonomously, from healthcare to manufacturing.",
    image: "/nextgenrobotic.jpg",
  },
  {
    title: "AI in Education",
    description:
      "Adaptive AI tools revolutionize learning by personalizing content and tracking student progress in real-time.",
    image: "/aiineducation.jpeg",
  },
  {
    title: "Human-AI Synergy",
    description:
      "AI systems now co-create with scientists, artists, and innovators, blending human creativity with advanced machine intelligence.",
    image: "/humanaisynergy.jpg",
  },
];
  const magazines = [
    { title: "Tech Today - August Edition", img: "/techtodaymagzines.webp" },
    { title: "AI Weekly - Special Report", img: "/aiweekly.webp" },
    { title: "Cloud and DevOps Insights", img: "/devopsmagzine.jpg" },
  ];

  const videos = [
    {
      title: "Top 10 Tech Trends of 2025",
      img: "/top10trends.jpg",
      url: "https://www.youtube.com/watch?v=YH4wP-ESLo4",
    },
    {
      title: "Blockchain & AI: The Future",
      img: "/ai_blockchain_future.jpeg",
      url: "https://www.youtube.com/watch?v=UIXFYPzaFbY",
    },
    {
      title: "Cybersecurity Trends You Must Know",
      img: "/cybersecuritytrend.png",
      url: "https://www.youtube.com/watch?v=kqaMIFEz15s",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-24 pb-16">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/newsherovideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 w-full max-w-6xl px-6 mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-sm font-semibold backdrop-blur">
               Real-Time Tech & Innovation Updates
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-center mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            PRASUNET
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Intelligence
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-slate-200 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay ahead with breaking stories, expert insights, and the latest innovations shaping the future of technology, AI, and digital transformation.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-600 transition transform hover:scale-105">
              Explore Latest News
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED BREAKING NEWS */}
      <section className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-blue-700 text-white py-16 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container mx-auto px-6 max-w-6xl">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide text-center">
            Featured Breaking News
          </h2>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:bg-white/20 transition border border-white/10">
                  <div className="flex flex-col md:flex-row h-full min-h-[280px]">
                    {/* Image */}
                    <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 text-sm md:text-base leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-6">
                        <button className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition transform hover:scale-105">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">
              Read Full Coverage →
            </button>
          </div>
        </div>
      </section>
      {/* LATEST NEWS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Latest News
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {latestNews.map((news, i) => {
              const slug = news.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

              return (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={news.img}
                    alt={news.title}
                    width={600}
                    height={350}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">{news.desc}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-4 space-x-4">
                      <span className="flex items-center gap-1">
                        <FaUser /> {news.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaTag /> {news.category}
                      </span>
                    </div>
                    <Link
                      href={`/readnews/${slug}`}
                      className="mt-5 text-blue-600 font-semibold flex items-center hover:underline"
                    >
                      Read More <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAGAZINES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Magazines</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {magazines.map((mag, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={mag.img}
                  alt={mag.title}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{mag.title}</h3>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    Read Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Featured Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {videos.map((vid, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={vid.img}
                  alt={vid.title}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{vid.title}</h3>
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                  >
                    ▶ Watch Video
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TechNewsPage;
