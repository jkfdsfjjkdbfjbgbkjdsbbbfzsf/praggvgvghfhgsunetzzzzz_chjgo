"use client";
import { useState } from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import Image from "next/image";
import { Zap, Users } from "lucide-react";

const services = [
  { title: "Software Development", image: "/ssoftware.jpeg", description: "Custom web & mobile apps, enterprise software, and SaaS platforms." },
  { title: "Cloud & DevOps", image: "/scloudservices.jpeg", description: "Cloud migrations, infra automation, CI/CD and scalable operations." },
  { title: "AI & Data", image: "/sai.jpeg", description: "ML models, data pipelines, analytics and actionable dashboards." },
  { title: "Cybersecurity", image: "/scybersecurity.jpeg", description: "Security assessments, managed detection, and secure engineering." },
];

const stats = [
  { value: "1000+", label: "Enterprise Projects" },
  { value: "65+", label: "Countries Enabled" },
  { value: "24/7", label: "Operational Coverage" },
  { value: "100%", label: "Service Reliability" },
];

export default function LearnMorePage() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase text-emerald-700 font-semibold">Learn More</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">Technology that accelerates growth</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              We design, build and operate secure, high-performing digital platforms that deliver measurable business outcomes.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="/contact" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md font-semibold shadow">Contact Sales</a>
              <a href="#services" className="text-emerald-700 font-medium">Explore services →</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-emerald-50 rounded-lg"><Zap className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <p className="text-sm font-semibold">Fast delivery</p>
                  <p className="text-sm text-slate-600">Iterative delivery and predictable sprints.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-emerald-50 rounded-lg"><Users className="w-5 h-5 text-emerald-600" /></div>
                <div>
                  <p className="text-sm font-semibold">Global teams</p>
                  <p className="text-sm text-slate-600">Local delivery hubs across regions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/home4.jpg" alt="Technology" width={1200} height={800} className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section id="services">
          <h2 className="text-3xl font-bold">Our Core Services</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Focused capabilities that power digital transformation across industries.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {services.map((s, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-40 relative">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                  <a href="/contact" className="inline-block mt-4 text-emerald-700 font-semibold">Talk to an expert →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Our Process</h3>
              <p className="text-slate-600 mt-2">A practical, outcome-driven approach from discovery to continuous value.</p>
              <ol className="mt-6 space-y-4 list-decimal list-inside text-slate-700">
                <li><strong>Discover:</strong> Align on outcomes, constraints and KPIs.</li>
                <li><strong>Design:</strong> Architecture, security and scalability blueprint.</li>
                <li><strong>Deliver:</strong> Incremental delivery with quality gates.</li>
                <li><strong>Operate:</strong> Monitoring, optimization and business adoption.</li>
              </ol>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-lg text-center">
                    <p className="text-2xl font-extrabold">{s.value}</p>
                    <p className="text-sm text-slate-600 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-600">We combine deep engineering expertise with compliance and security best practices to deliver resilient systems.</div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold">Case Studies</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="h-44 relative"><Image src="/homepageprojectdeleivered1.png" alt="Case 1" fill className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-semibold">Enterprise Platform Modernization</h4>
                <p className="text-sm text-slate-600 mt-2">Modernized legacy platform to improve performance and reduce costs by 40%.</p>
              </div>
            </article>
            <article className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="h-44 relative"><Image src="/homepage24:7support.png" alt="Case 2" fill className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-semibold">24/7 Global Operations</h4>
                <p className="text-sm text-slate-600 mt-2">Built an ops model providing continuous coverage and incident response.</p>
              </div>
            </article>
            <article className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="h-44 relative"><Image src="/homepageglobalpresence.png" alt="Case 3" fill className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-semibold">Global Rollout</h4>
                <p className="text-sm text-slate-600 mt-2">Deployed SaaS across multiple regions with localized compliance.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-12 bg-emerald-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold">Ready to transform?</h3>
          <p className="mt-2">Book a discovery call and let us show how technology can drive your business outcomes.</p>
          <a href="/contact" className="inline-block mt-4 bg-white text-emerald-600 px-6 py-3 rounded-md font-semibold">Schedule a call</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
