'use client';

import { useState } from 'react';
import { Zap, TrendingUp, ArrowRight, Globe, Code, Cloud, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
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

  const solutions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital modernization for enterprises'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Application Development',
      description: 'Custom software solutions for your business needs'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'AI-powered insights for data-driven decisions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'DevOps & Automation',
      description: 'Continuous integration and deployment excellence'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Manufacturing',
    'Telecom',
    'Media & Entertainment',
    'Energy & Utilities',
    'Government & Public Sector'
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
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud',
    'Kubernetes', 'Docker', 'Terraform',
    'React', 'Node.js', 'Python',
    'Machine Learning', 'AI/LLM', 'Blockchain',
    'Salesforce', 'SAP', 'Oracle',
    'Cybersecurity', 'DevOps', 'Microservices'
  ];

  return (
    <div className="min-h-screen bg-white">
       <Navbar />
      {/* Hero Section with Background Video */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/businesshomepage.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Transform Your <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Enterprise</span> with Intelligent Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive digital innovation, operational excellence, and sustainable growth with our comprehensive suite of enterprise solutions trusted by Fortune 500 companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:border-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-indigo-300 mb-2">500+</div>
                <div className="text-sm text-gray-300 font-medium">Enterprise Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-pink-300 mb-2">1K+</div>
                <div className="text-sm text-gray-300 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
                <div className="text-sm text-gray-300 font-medium">Years Expertise</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

 

      {/* Solutions Grid */}
      <section className="py-24 px-6 lg:px-24 bg-gradient-to-b from-white via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed for modern enterprises to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 group-hover:scale-110 transition-transform duration-300 text-5xl">
                      {solution.icon}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  <button className="text-indigo-600 font-semibold flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across diverse sectors with proven track record of success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-8 rounded-2xl border-2 border-transparent hover:border-indigo-500 shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer transform hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {index === 0 && '🏦'}
                    {index === 1 && '🏥'}
                    {index === 2 && '🛒'}
                    {index === 3 && '🏭'}
                    {index === 4 && '📱'}
                    {index === 5 && '🎬'}
                    {index === 6 && '⚡'}
                    {index === 7 && '🏛️'}
                  </div>
                  <p className="font-bold text-lg text-gray-900">{industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-6 lg:px-24 bg-gradient-to-b from-indigo-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world transformations that deliver measurable results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header with Icon */}
                <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-pink-500 overflow-hidden flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{study.icon}</div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.company}</h3>
                  
                  <div className="mb-6 space-y-4">
                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Challenge</p>
                      <p className="text-gray-700 font-semibold">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-1">Result</p>
                      <p className="text-gray-700 font-bold text-lg text-green-600">{study.result}</p>
                    </div>
                  </div>

                  <button className="text-indigo-600 font-semibold flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks powering enterprise solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-pink-50 border-2 border-indigo-200 rounded-full font-semibold text-gray-700 hover:border-indigo-600 hover:shadow-lg hover:from-indigo-100 hover:to-pink-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section className="py-24 px-6 lg:px-24 bg-gradient-to-b from-white via-indigo-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss how we can accelerate your digital transformation journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-12 rounded-3xl shadow-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Enterprise"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Solution Needed *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a solution</option>
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
                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your business challenge and objectives..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-semibold ${
                  submitMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
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
