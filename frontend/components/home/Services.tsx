
"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const categories = [
  "All",
  "Consulting",
  "Engineering",
  "Cloud & Infrastructure",
  "Data & AI",
  "Security & Compliance",
  "Business Solutions",
  "Emerging Tech",
];

const getCategory = (title: string) => {
  const value = title.toLowerCase();

  if (value.includes("consulting") || value.includes("project management") || value.includes("training")) {
    return "Consulting";
  }
  if (
    value.includes("software") ||
    value.includes("web development") ||
    value.includes("mobile app") ||
    value.includes("api") ||
    value.includes("qa") ||
    value.includes("testing") ||
    value.includes("legacy") ||
    value.includes("integration")
  ) {
    return "Engineering";
  }
  if (
    value.includes("cloud") ||
    value.includes("network") ||
    value.includes("managed it") ||
    value.includes("support") ||
    value.includes("devops")
  ) {
    return "Cloud & Infrastructure";
  }
  if (
    value.includes("data") ||
    value.includes("analytics") ||
    value.includes("ai") ||
    value.includes("machine learning") ||
    value.includes("business intelligence") ||
    value.includes("rpa")
  ) {
    return "Data & AI";
  }
  if (value.includes("cybersecurity") || value.includes("compliance") || value.includes("risk")) {
    return "Security & Compliance";
  }
  if (
    value.includes("erp") ||
    value.includes("crm") ||
    value.includes("e-commerce") ||
    value.includes("marketing")
  ) {
    return "Business Solutions";
  }
  if (
    value.includes("iot") ||
    value.includes("blockchain") ||
    value.includes("web3") ||
    value.includes("vr/ar") ||
    value.includes("game") ||
    value.includes("embedded")
  ) {
    return "Emerging Tech";
  }

  return "Engineering";
};



const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filteredServices = useMemo(() => {
    const categoryMatched =
      activeCategory === "All"
        ? services
        : services.filter((service) => getCategory(service.title) === activeCategory);

    const query = searchTerm.trim().toLowerCase();
    if (!query) return categoryMatched;

    return categoryMatched.filter(
      (service) =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        getCategory(service.title).toLowerCase().includes(query)
    );
  }, [activeCategory, searchTerm]);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 8);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.18em] text-emerald-300 font-semibold">
            Global IT Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white leading-tight">
            Enterprise Technology Solutions for Worldwide Businesses
          </h2>
          <p className="mt-5 text-slate-300 text-base md:text-lg">
            Explore our complete portfolio of services designed to help startups,
            SMEs, and global enterprises modernize, scale, and stay competitive.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-[15px] font-medium border transition ${
                activeCategory === category
                  ? "bg-emerald-500 text-white border-emerald-400 shadow-[0_8px_20px_rgba(16,185,129,0.35)]"
                  : "bg-slate-900/70 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-7 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-12">
          {displayedServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group overflow-hidden rounded-2xl border border-slate-700/70 shadow-[0_10px_35px_rgba(2,6,23,0.45)] bg-slate-900/80 cursor-pointer min-h-[280px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/65 to-slate-950/95 transition-opacity duration-300 ease-in-out" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 opacity-75 group-hover:opacity-100 transition" />
                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-left">
                  <span className="inline-flex w-fit text-[11px] uppercase tracking-[0.15em] bg-white/10 text-slate-100 rounded-full px-3 py-1 mb-3 border border-white/15">
                    {getCategory(service.title)}
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-slate-200/95 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>
                  <p className="mt-4 text-emerald-300 text-sm font-semibold tracking-wide">
                    Learn more →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {!showAll && filteredServices.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition"
            >
              View All Services
            </button>
          </div>
        )}
        {showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition"
            >
              Show Less
            </button>
          </div>
        )}
        {filteredServices.length === 0 && (
          <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center">
            <p className="text-lg font-semibold text-white">No services match your search.</p>
            <p className="text-slate-300 mt-2">
              Try a different keyword or clear filters to browse all global IT services.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
