'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { services } from '@/lib/services';

export default function BusinessPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/business-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitMessage(`Error: ${result.error || 'Failed to submit inquiry'}`);
        return;
      }

      if (result.success) {
        setSubmitMessage(' Thank you! We will contact you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          message: ''
        });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage(`Error: ${result.error || 'Failed to submit inquiry.'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setSubmitMessage(`Connection error: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    { name: 'Financial Services', image: '/FINANCE.jpg' },
    { name: 'Healthcare & Life Sciences', image: '/aiinhealthcare.webp' },
    { name: 'Retail & E-commerce', image: '/RETAIL.webp' },
    { name: 'Manufacturing', image: '/MANUFACTURING.webp' },
    { name: 'Energy & Utilities', image: '/ENERGY.webp' },
    { name: 'Government & Public Sector', image: '/GOVERNMENT.webp' },
    { name: 'Logistics & Supply Chain', image: '/Logistics.jpeg' },
    { name: 'Education Technology', image: '/EDUCATION.png' }
  ];

  const caseStudies = [
    {
      company: 'Global Financial Corporation',
      challenge: 'Digital Banking Transformation',
      result: '40% operational efficiency improvement',
      icon: '🏦'
    },
    {
      company: 'Leading E-commerce Platform',
      challenge: 'Scalable Cloud Infrastructure',
      result: '99.9% uptime achieved',
      icon: '🛒'
    },
    {
      company: 'Healthcare Provider Network',
      challenge: 'Data Security & Compliance',
      result: 'HIPAA & ISO 27001 certified',
      icon: '🏥'
    },
    {
      company: 'Manufacturing Giant',
      challenge: 'IoT & Industry 4.0',
      result: '35% production increase',
      icon: '🏭'
    },
    {
      company: 'Global Logistics Leader',
      challenge: 'Supply Chain Visibility',
      result: '25% faster delivery cycles',
      icon: '🚚'
    },
    {
      company: 'Energy Services Group',
      challenge: 'Smart Grid Modernization',
      result: '18% reduction in operating costs',
      icon: '⚡'
    },
    {
      company: 'Public Sector Agency',
      challenge: 'Digital Citizen Services',
      result: '2x increase in online engagement',
      icon: '🏛️'
    },
    {
      company: 'Retail Chain Network',
      challenge: 'Omnichannel Customer Experience',
      result: '22% uplift in customer retention',
      icon: '🛍️'
    },
    {
      company: 'Global Technology Manufacturer',
      challenge: 'Enterprise Systems Integration',
      result: '30% faster product launch cycles',
      icon: '🧩'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 min-h-screen flex items-center justify-center">
        {/* Full Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/businesshomepage.mp4" type="video/mp4" />
        </video>

        {/* Strong Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Accent Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-30 container mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-md px-5 py-2 text-sm font-medium text-slate-200 hover:border-white/40 transition">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Transform Ideas Into Business Success
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight text-white">
                Modernize Your Enterprise Operations
                <span className="block mt-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                 
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Modernize your enterprise with secure, scalable solutions that accelerate growth, minimize risk, and power smarter business decisions.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
              <Link href="/contact" aria-label="Get Started" className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all"></div>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link href="/contact?demo=1" aria-label="Schedule Demo" className="px-8 py-4 rounded-lg font-semibold text-cyan-300 border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all flex items-center justify-center">
                Schedule Demo
              </Link>
            </div>

            {/* (Removed numeric stats per request) */}
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <p className="text-xs text-slate-400 uppercase tracking-widest">Scroll to explore</p>
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-600 mb-4">Core business capabilities</p>
            <h2 className="text-4xl font-bold text-slate-900">Built for enterprise-grade outcomes</h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Select services designed for growth, resilience, and productivity across cloud, security, software, and analytics.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {services.slice(0, 8).map((service) => (
              <Link key={service.title} href={service.href} className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition hover:-translate-y-1 hover:border-cyan-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <span className="text-sm uppercase tracking-[0.35em] text-cyan-600">
                    Service
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-cyan-600 font-semibold">
                    <span>View details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/service" className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-500">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-violet-600 mb-4">Industry success stories</p>
            <h2 className="text-4xl font-bold text-slate-900">Proof in real enterprise results</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`/${index % 2 === 0 ? 'GOVERNMENT.webp' : index === 1 ? 'EDUCATION.png' : index === 2 ? 'ENERGY.webp' : 'Logistics.jpeg'}`}
                    alt={caseStudy.company}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-3xl">{caseStudy.icon}</div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">{caseStudy.company}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{caseStudy.challenge}</p>
                  <div className="mt-6 rounded-3xl bg-slate-50 p-5 border border-slate-200 text-slate-900">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Result</p>
                    <p className="mt-3 text-lg font-semibold">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-600 mb-4">Tailored for your sector</p>
            <h2 className="text-4xl font-bold text-slate-900">Industry expertise that moves fast</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {industries.map((industry, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/30 transition hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_0.95fr] items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-xl shadow-slate-200/40">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-600 mb-4">Ready to transform</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Partner with a trusted enterprise technology team.</h2>
            <p className="text-slate-600 leading-relaxed mb-8">Our consulting, design and engineering teams work with your stakeholders to deliver measurable outcomes across cloud, software, data and security.</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Speed</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Fast delivery</p>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Scale</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Enterprise ready</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-xl shadow-slate-200/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Your enterprise"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Solution *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="">Choose a solution</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data & Analytics</option>
                  <option value="devops">DevOps & Automation</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="managed-services">Managed Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project brief *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none"
                  placeholder="Describe your goals, timeline, and desired outcomes."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 py-4 text-base font-semibold text-slate-950 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                    Sending inquiry
                  </>
                ) : (
                  <>Schedule a consultation <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              {submitMessage && (
                <div className={`rounded-2xl border p-4 text-center font-medium ${
                  submitMessage.toLowerCase().includes('thank')
                    ? 'border-emerald-200 bg-emerald-900/20 text-emerald-900'
                    : 'border-rose-200 bg-rose-900/20 text-rose-900'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
