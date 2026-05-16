"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="max-w-7xl mx-auto">
          {/* Hero + Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center mb-16"
          >
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full bg-slate-900/95 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-slate-200/10">
                Trusted Professional Services
              </span>
              <div className="space-y-6 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
                  Strategic services that drive measurable outcomes.
                </h1>
                <p className="text-lg text-slate-600 leading-8">
                  Built for business growth, operational resilience, and real-world impact.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/25 transition hover:bg-emerald-500"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Talk to an Expert
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-lg shadow-emerald-100/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-500 to-emerald-300" />
                  <div className="relative space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">Fast delivery</p>
                    <h3 className="text-xl font-semibold text-slate-950">Accelerated launches</h3>
                    <p className="text-sm leading-6 text-slate-600">
                      Launch with speed and consistency through streamlined delivery frameworks.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950/5 via-slate-50 to-slate-100 p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-slate-800 to-slate-500" />
                  <div className="relative space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-600">Enterprise grade</p>
                    <h3 className="text-xl font-semibold text-slate-950">Built to scale</h3>
                    <p className="text-sm leading-6 text-slate-600">
                      Architecture and operations designed for growth, resilience, and ongoing performance.
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-slate-100 p-6 shadow-lg shadow-cyan-100/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-500 to-slate-400" />
                  <div className="relative space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-700">Risk-aware</p>
                    <h3 className="text-xl font-semibold text-slate-950">Secure execution</h3>
                    <p className="text-sm leading-6 text-slate-600">
                      Expert governance and controls to protect delivery, compliance, and business continuity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
                <img
                  src="/servicehome.png"
                  alt="Professional service solutions"
                  className="w-full h-[420px] object-cover sm:h-[520px] transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(180deg,transparent,rgba(6,95,70,0.26))]" />
                <div className="absolute left-6 right-6 bottom-6 rounded-[1.75rem] bg-gradient-to-r from-emerald-600 via-emerald-700 to-slate-900/90 border border-white/20 p-6 shadow-2xl shadow-emerald-900/20">
                  <p className="text-xs uppercase tracking-[0.26em] text-emerald-200">Service excellence</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Delivering outcome-driven programs for modern enterprises
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-emerald-100">
                    Customized engagements, collaborative teams, and measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative my-24">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-r from-emerald-100 via-slate-100 to-cyan-100 opacity-70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-10 shadow-[0_35px_120px_rgba(15,23,42,0.08)]">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div className="space-y-6">
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                    Why choose us
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Strategic service delivery that blends innovation, reliability, and measurable business impact.
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-slate-600">
                    Our suite of professional services is designed to give leaders confidence in every phase of transformation, from planning and delivery to ongoing operations.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <p className="text-sm uppercase tracking-[0.22em] text-emerald-600 font-semibold">Modern delivery</p>
                      <p className="mt-3 text-slate-600 text-sm leading-6">
                        Agile teams and cloud-native engineering accelerate time to market with predictable quality.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <p className="text-sm uppercase tracking-[0.22em] text-emerald-600 font-semibold">Business-ready solutions</p>
                      <p className="mt-3 text-slate-600 text-sm leading-6">
                        Every engagement is shaped around your business goals, risk profile, and operational cadence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <div className="space-y-6">
                    <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Designed for Growth</p>
                      <h3 className="mt-4 text-2xl font-semibold">Scale faster with expert-led execution</h3>
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-3xl border border-slate-200 bg-white p-5">
                        <p className="text-sm font-semibold text-slate-900">Built on trust</p>
                        <p className="mt-2 text-slate-600 text-sm leading-6">Transparent governance, rapid feedback loops, strong partnership rhythms.</p>
                      </div>
                      <div className="rounded-3xl border border-slate-200 bg-white p-5">
                        <p className="text-sm font-semibold text-slate-900">Future-ready tech</p>
                        <p className="mt-2 text-slate-600 text-sm leading-6">Practical innovation that aligns with your current systems and long-term roadmap.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link href={service.href}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="p-8">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Professional Service
                      </span>
                      <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-slate-600 text-sm leading-6">
                        {service.description}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-white text-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_32%),_radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_28%)]">
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] p-10 lg:p-16">
                <div className="space-y-6 z-10">
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                    Final thought
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Launch every service engagement with clarity, speed, and measurable business value.
                  </h2>
                  <p className="max-w-3xl text-slate-600 leading-8">
                    Our professional services are built to help your organization accelerate growth, simplify operations, and deliver secure, scalable solutions across teams and departments.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Talk to an Expert
                    </Link>
                    <Link
                      href="/service"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                      Explore service details
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
                    <p className="text-sm uppercase tracking-[0.22em] text-emerald-600">Business-ready impact</p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                      From strategy to execution
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm leading-6">
                      We design services that match your current maturity, accelerate roadmaps, and keep outcomes measurable.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Secure foundation</p>
                      <p className="mt-3 text-slate-900 font-semibold">Built around risk reduction</p>
                    </div>
                    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Operational confidence</p>
                      <p className="mt-3 text-slate-900 font-semibold">Consistent delivery rhythms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
