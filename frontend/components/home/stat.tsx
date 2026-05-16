"use client";

import Image from "next/image";
import { CheckCircle2, Globe2, ShieldCheck, Timer } from "lucide-react";
import { motion } from "framer-motion";

const metricCards = [
  { value: "1000+", label: "Enterprise Projects", desc: "1000+ enterprise projects delivered worldwide.", icon: <CheckCircle2 className="w-5 h-5" /> },
  { value: "65+", label: "Countries Enabled", desc: "Operating across 65+ countries with local teams.", icon: <Globe2 className="w-5 h-5" /> },
  { value: "24/7", label: "Operational Coverage", desc: "24/7 monitoring and rapid response.", icon: <Timer className="w-5 h-5" /> },
  { value: "100%", label: "Service Reliability", desc: "Enterprise-grade reliability and proactive maintenance.", icon: <ShieldCheck className="w-5 h-5" /> },
];

const deliveryJourney = [
  { phase: "01", title: "Business Discovery", desc: "Align objectives, risks, and measurable outcomes." },
  { phase: "02", title: "Solution Blueprint", desc: "Design scalable architecture and delivery roadmap." },
  { phase: "03", title: "Controlled Delivery", desc: "Execute with governance, QA, and secure engineering." },
  { phase: "04", title: "Continuous Value", desc: "Optimize performance, adoption, and long-term ROI." },
];

const timelineImages = [
  '/BusinessDiscovery.png',
  '/SolutionBlueprint.png',
  '/ControlledDelivery.png',
  '/ContinuousValue.png',
];

export default function Stats() {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              className="pr-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold">Executive Snapshot</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
                Enterprise execution that scales with your business
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-4 max-w-xl">
                We design, build and operate mission-critical systems with enterprise-grade security and predictable
                delivery. From initial discovery to ongoing operations, Prasunet helps teams move faster with confidence.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <a href="/contact" className="inline-flex items-center px-5 py-3 bg-emerald-600 text-white rounded-lg font-medium shadow-sm hover:bg-emerald-700">Contact Sales</a>
                <a href="#metrics" className="text-emerald-700 font-semibold hover:underline">See our metrics →</a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-end w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full rounded-none">
                <Image src="/clients/HOMEPAGEIMG.png" alt="Global presence" width={1440} height={900} className="w-full h-auto object-contain" />
              </div>
            </motion.div>
          </div>

          <div id="metrics" className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metricCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm min-h-[150px] flex flex-col justify-between"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">{card.value}</p>
                    <p className="text-sm md:text-base text-slate-600 mt-1 font-semibold">{card.label}</p>
                  </div>
                </div>
                <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div id="transformation" className="mt-12">
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-700 font-semibold mb-6 text-center">Transformation Framework</p>

            <div className="relative mt-4">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 hidden md:block" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }} />

              <div className="flex flex-col items-center">
                {deliveryJourney.map((item, idx) => (
                  <motion.div
                    key={item.phase}
                    className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    {/* Mobile centered card */}
                    <div className="md:hidden w-full mb-4">
                      <div className="p-6 rounded-lg bg-white border border-slate-100 shadow-sm text-center">
                        <p className="text-sm md:text-base font-bold uppercase tracking-wide text-emerald-700">Phase {item.phase}</p>
                        <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mt-3">{item.title}</h4>
                        <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Left side (shows on md+) */}
                    <div className={`hidden md:flex md:w-1/2 ${idx % 2 === 0 ? 'justify-end pr-8' : 'justify-start pr-8'}`}>
                      {idx % 2 === 0 ? (
                        <div className="flex items-center gap-4">
                          <div className="hidden md:block w-40 h-32 rounded-lg overflow-hidden shadow-sm bg-inherit">
                            <Image src={timelineImages[idx]} alt={`Phase ${item.phase} image`} width={400} height={240} className="w-full h-full object-contain bg-inherit" />
                          </div>
                          <div className="p-6 rounded-lg bg-white border border-slate-100 shadow-sm max-w-md text-right">
                            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-emerald-700">Phase {item.phase}</p>
                            <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mt-3">{item.title}</h4>
                            <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full" />
                      )}
                    </div>

                    {/* Center circle */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-emerald-500 -mx-6" style={{ boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2), 0 0 15px rgba(16, 185, 129, 0.6)' }}>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-lg animate-pulse" />
                    </div>

                    {/* Right side (shows on md+) */}
                    <div className={`hidden md:flex md:w-1/2 ${idx % 2 === 1 ? 'pl-8 justify-start' : 'pl-8'}`}>
                      {idx % 2 === 1 ? (
                        <div className="flex items-center gap-4">
                          <div className="p-6 rounded-lg bg-white border border-slate-100 shadow-sm max-w-md text-left">
                            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-emerald-700">Phase {item.phase}</p>
                            <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mt-3">{item.title}</h4>
                            <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
                          </div>
                          <div className="hidden md:block w-40 h-32 rounded-lg overflow-hidden shadow-sm bg-inherit">
                            <Image src={timelineImages[idx]} alt={`Phase ${item.phase} image`} width={400} height={240} className="w-full h-full object-contain bg-inherit" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full" />
                      )}
                    </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Proven IT Solutions</h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 mb-6">
              From engineering execution to ongoing operations, our model is built to deliver measurable business impact.
            </p>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                Enterprise-ready
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                Outcome-focused delivery
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                Secure & scalable operations
              </span>
            </div>
          </div>

          <div className="space-y-20 md:space-y-24">
            {[
              {
                title: "Project Solutions Delivered",
                img: "/homepageprojectdeleivered1.png",
                desc: "From startups to Fortune 500 companies, our solutions span industries and technologies, ensuring scalability, performance, and measurable impact.",
                note: "We align delivery with your business roadmap so every launch is strategic and measurable.",
                bullets: [
                  "Successfully delivered projects",
                  "Agile methodology for faster execution",
                  "Client-first mindset with measurable results",
                ],
              },
              {
                title: "24/7 Global Operations Support",
                img: "/homepage24:7support.png",
                desc: "Our dedicated teams monitor, maintain, and optimize systems proactively, reducing downtime and maximizing productivity.",
                note: "Continuous coverage and proactive optimization keep your operations resilient at scale.",
                bullets: [
                  "Round-the-clock monitoring",
                  "Agile response mechanisms",
                  "Proactive system optimization",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] items-center"
              >
                <div className={`w-full ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={cs.img} alt={cs.title} width={1200} height={800} className="w-full h-auto object-contain object-center" priority={true} />
                </div>
                <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-sm uppercase tracking-[0.14em] text-emerald-700 font-semibold">Case Highlight</p>
                  <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">{cs.title}</h3>
                  <p className="text-base md:text-lg text-slate-600 max-w-2xl">{cs.desc}</p>
                  <p className="text-base md:text-lg text-slate-700 max-w-2xl">{cs.note}</p>
                  <ul className="list-disc list-inside space-y-4 text-slate-700 pl-5">
                    {cs.bullets.map((b, i) => (
                      <li key={i} className="text-base md:text-lg font-medium">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-8 md:py-12">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-2">Global Reach</p>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                Global Presence <span className="text-emerald-600">(65+ countries)</span>
              </h3>
              <p className="text-base md:text-lg mb-5 text-slate-700 leading-relaxed">
                Our global footprint ensures local expertise, seamless collaboration, and faster project delivery.
                From AI-powered platforms to enterprise solutions, we empower businesses worldwide to achieve growth,
                efficiency, and digital transformation.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                With strategically located hubs, a network of skilled professionals, and cutting-edge technology,
                Prasunet connects innovation with impact - no matter where your business is.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full h-[360px] md:h-[520px] overflow-hidden rounded-[2rem]">
                <Image src="/homepageglobalpresence.png" alt="Global presence" fill className="object-contain object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
