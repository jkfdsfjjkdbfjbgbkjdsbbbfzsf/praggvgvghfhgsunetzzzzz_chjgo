// Knowledge base for Prasunet AI Chatbot with multiple response variants
export const chatbotKnowledgeBase = {
  company: {
    name: "Prasunet",
    description: "A professional IT partner for digital transformation operating in 65+ countries",
    mission: "Combine strategic consulting and engineering precision to help organizations modernize confidently",
    globalCoverage: "65+ countries",
    projectsDelivered: "1000+",
    operationalCoverage: "24/7",
    serviceReliability: "100%",
  },
  services: [
    {
      name: "IT Consulting",
      description: "Strategic consulting for digital transformation and business optimization",
    },
    {
      name: "Software Engineering",
      description: "Enterprise-grade software development with secure, scalable solutions",
    },
    {
      name: "Cloud Modernization",
      description: "Cloud migration, infrastructure automation, and optimization",
    },
    {
      name: "Cybersecurity",
      description: "Security operations, compliance, and threat intelligence services",
    },
    {
      name: "DevOps & Platform Engineering",
      description: "CI/CD implementation, infrastructure automation, and reliability services",
    },
    {
      name: "Data & Analytics",
      description: "Data lakehouse, analytics pipelines, and business intelligence solutions",
    },
    {
      name: "AI & Machine Learning",
      description: "AI-powered solutions including document intelligence, personalization, and predictive systems",
    },
    {
      name: "24/7 Global Operations Support",
      description: "Round-the-clock monitoring, maintenance, and optimization of systems",
    },
  ],
  industries: [
    "Banking & Financial Services",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Logistics & Transportation",
    "Insurance",
    "E-commerce",
    "Government",
    "Telecommunications",
    "Energy & Utilities",
    "Travel & Hospitality",
    "Media & Entertainment",
    "Education",
    "Real Estate",
    "Construction",
    "SaaS",
  ],
  responseVariants: {
    services: [
      "Great question! 🚀 We offer a comprehensive suite including {services}. Which one interests you most?",
      "Absolutely! Our core services span {services} and more. What challenges are you looking to solve?",
      "We cover quite a bit! From {services} to everything in between. Tell me more about your needs!",
      "Our service portfolio includes {services}. Would you like details on any specific area?",
    ],
    company: [
      "Happy to tell you about us! Prasunet is {description}. We've delivered {projects} enterprise projects across {countries} globally. 💼",
      "Thanks for asking! We're {description} with presence in {countries} and {projects} successful projects under our belt.",
      "{description} - that's Prasunet in a nutshell. We've been trusted with {projects} projects across {countries} countries.",
      "We're {description}. Operating in {countries} with {projects}+ delivered projects. Proud of our track record! 📈",
    ],
    support: [
      "Absolutely! We provide 24/7 Global Operations Support. Round-the-clock monitoring means we're always watching your systems. How can I help? 🔧",
      "Great timing! Our {coverage} support team is always ready. From monitoring to optimization - we handle it all.",
      "You're in good hands! We offer {coverage} support with dedicated teams across time zones. What do you need help with?",
      "Perfect question! Our {coverage} support ensures your operations never skip a beat. Let's discuss your needs!",
    ],
    global: [
      "We're present in {countries} across all continents! 🌍 With local teams and global expertise, we understand local markets while delivering world-class solutions.",
      "Global reach with local touch - that's our approach. Operating in {countries}, we bring international standards and local insights.",
      "Our {countries} presence means local expertise wherever you are. Global standards, local solutions! 🌐",
      "From {countries} countries, we serve clients worldwide. Global infrastructure with personalized local support.",
    ],
    projects: [
      "Impressive portfolio! We've successfully delivered {projects}+ enterprise projects. From startups to Fortune 500s, we've got experience. 🏆",
      "We're proud of our {projects}+ successful projects. Want to see some case studies from your industry?",
      "{projects}+ projects and counting! Each one delivered with our commitment to quality and measurable outcomes.",
      "Check this out - {projects}+ successful enterprise projects! Spanning multiple industries. Would you like details?",
    ],
    industries: [
      "We serve {industries}... and many more! Each industry gets tailored solutions based on their unique challenges.",
      "Our expertise spans {industries}. Which industry are you in? I can share relevant insights!",
      "From {industries} to other sectors - we've got you covered. What's your industry focus?",
      "We specialize across {industries} and beyond. Need solutions for your specific industry? Let's talk!",
    ],
    greeting: [
      "Hey there! 👋 What brings you to Prasunet today? Happy to help!",
      "Welcome! I'm here to answer all your questions. What would you like to know?",
      "Great to see you! How can I assist you with Prasunet's services today?",
      "Hello! 🙌 Curious about Prasunet? I'm here to help!",
    ],
    default: [
      "That's interesting! Could you tell me more? I can help with services, industries, global presence, and our projects. 💡",
      "I see! Want to know more about something specific? Try asking about our services, support, or past projects.",
      "Hmm, let me help better! Ask me about Prasunet's services, industries we serve, or our success stories.",
      "Got it! For more specific answers, ask about our services, global coverage, or successful projects.",
    ],
  },
  faqs: [
    {
      question: "What services does Prasunet offer globally?",
      answer:
        "Prasunet provides IT consulting, software engineering, cloud modernization, cybersecurity, and digital transformation services for organizations across industries. Our teams design secure, scalable, and business-focused solutions tailored to each client context.",
    },
    {
      question: "Does Prasunet support startups and small businesses?",
      answer:
        "Yes. We support startups and growth-stage businesses with product strategy, MVP development, scaling architecture, and continuous engineering support. Our engagement models are designed to remain flexible, practical, and outcome-driven.",
    },
    {
      question: "What makes Prasunet different from other IT companies?",
      answer:
        "We combine strategic consulting with accountable execution. This means we not only define the right roadmap but also deliver it with structured governance, transparent communication, and measurable business outcomes.",
    },
    {
      question: "Does Prasunet provide cloud and DevOps solutions?",
      answer:
        "Absolutely. We offer cloud migration, infrastructure automation, CI/CD implementation, and platform reliability services. These solutions help organizations improve speed, optimize cost, and strengthen operational resilience.",
    },
    {
      question: "How do you ensure quality and security in projects?",
      answer:
        "Our delivery model integrates secure coding practices, QA automation, performance validation, and release governance throughout the lifecycle. This ensures reliability, compliance readiness, and reduced production risk.",
    },
    {
      question: "Can Prasunet work with international clients and distributed teams?",
      answer:
        "Yes. We operate with a global delivery approach and collaborate effectively across time zones. Our processes and communication frameworks are designed to support distributed stakeholders with high transparency.",
    },
  ],
};

// Get random variant
function getRandomVariant(variants: string[]): string {
  return variants[Math.floor(Math.random() * variants.length)];
}

// Replace placeholders in response
function formatResponse(template: string, data: Record<string, string>): string {
  let result = template;
  Object.entries(data).forEach(([key, value]) => {
    result = result.replace(`{${key}}`, value);
  });
  return result;
}

// Enhanced search and response generation with variants
export function searchKnowledge(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Direct FAQ matching
  for (const faq of chatbotKnowledgeBase.faqs) {
    if (
      lowerQuery.includes("faq") ||
      faq.question.toLowerCase().includes(lowerQuery) ||
      lowerQuery.includes(faq.question.toLowerCase().split(" ")[0])
    ) {
      return faq.answer;
    }
  }

  // Service matching
  if (lowerQuery.includes("service") || lowerQuery.includes("offer") || lowerQuery.includes("provide")) {
    const serviceNames = chatbotKnowledgeBase.services.slice(0, 5).map((s) => s.name);
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.services);
    return formatResponse(template, { services: serviceNames.join(", ") });
  }

  // Company info
  if (lowerQuery.includes("prasunet") || lowerQuery.includes("about") || lowerQuery.includes("company")) {
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.company);
    return formatResponse(template, {
      description: chatbotKnowledgeBase.company.description,
      projects: chatbotKnowledgeBase.company.projectsDelivered,
      countries: chatbotKnowledgeBase.company.globalCoverage,
    });
  }

  // Global presence
  if (lowerQuery.includes("global") || lowerQuery.includes("countries") || lowerQuery.includes("presence")) {
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.global);
    return formatResponse(template, { countries: chatbotKnowledgeBase.company.globalCoverage });
  }

  // Support/Operations
  if (lowerQuery.includes("support") || lowerQuery.includes("24/7") || lowerQuery.includes("help")) {
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.support);
    return formatResponse(template, { coverage: chatbotKnowledgeBase.company.operationalCoverage });
  }

  // Projects
  if (lowerQuery.includes("project") || lowerQuery.includes("delivered") || lowerQuery.includes("case")) {
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.projects);
    return formatResponse(template, { projects: chatbotKnowledgeBase.company.projectsDelivered });
  }

  // Industries
  if (lowerQuery.includes("industry") || lowerQuery.includes("sector")) {
    const industryList = chatbotKnowledgeBase.industries.slice(0, 6).join(", ");
    const template = getRandomVariant(chatbotKnowledgeBase.responseVariants.industries);
    return formatResponse(template, { industries: industryList });
  }

  // Default response
  return getRandomVariant(chatbotKnowledgeBase.responseVariants.default);
}

// Export greeting
export function getGreeting(): string {
  return getRandomVariant(chatbotKnowledgeBase.responseVariants.greeting);
}

// Get realistic thinking delay (1-3 seconds)
export function getThinkingDelay(): number {
  return 1000 + Math.random() * 2000;
}
