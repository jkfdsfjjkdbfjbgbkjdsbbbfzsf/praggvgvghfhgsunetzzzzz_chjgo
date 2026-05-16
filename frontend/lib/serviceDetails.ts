export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  heroVideo?: string;
  secondaryVideo?: string;
  heroDescription: string;
  heroCta: string;
  heroSubtext: string;
  overview: string[];
  bullets: string[];
  highlights: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  industries: { name: string; description: string; image: string }[];
  caseStudies: { title: string; description: string; bullets: string[]; image: string }[];
  ctaHeading: string;
  closing: string;
  ctaLink: string;
}

export const serviceDetails: Record<string, ServiceDetail> = 
{
  "softwaredevelopment": {
    "slug": "softwaredevelopment",
    "title": "Software Development",
    "category": "Digital Engineering",
    "heroImage": "/ssoftware.jpeg",
    "heroVideo": "/servicesvideo/softwaredevlopmentvideo.mp4",
    "heroDescription": "Custom software solutions designed to accelerate digital transformation, enhance efficiency, and drive enterprise growth.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Software Development combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic software planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Platform modernization for Software Development",
        "description": "Delivered a platform modernization for software development that drove measurable improvement for the organization.",
        "bullets": [
          "Built a modern, scalable software platform.",
          "Improved developer velocity with automation.",
          "Delivered faster time-to-market for new features.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Agile delivery acceleration for Software Development",
        "description": "Delivered a agile delivery acceleration for software development that drove measurable improvement for the organization.",
        "bullets": [
          "Standardized architecture and integration patterns.",
          "Improved deployment predictability.",
          "Enabled easier long-term evolution.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Scalable architecture launch for Software Development",
        "description": "Delivered a scalable architecture launch for software development that drove measurable improvement for the organization.",
        "bullets": [
          "Created resilient service layers for growth.",
          "Reduced infrastructure risk.",
          "Improved operational visibility.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Business velocity improvement for Software Development",
        "description": "Delivered a business velocity improvement for software development that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered measurable business outcomes through software.",
          "Aligned engineering with product goals.",
          "Scaled delivery across teams with confidence.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Software Development?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "itconsulting": {
    "slug": "itconsulting",
    "title": "IT Consulting & Strategy",
    "category": "Technology Strategy",
    "heroImage": "/sITconsulting.jpeg",
    "heroVideo": "/servicesvideo/itconsultingvideo.mp4",
    "heroDescription": "Strategic IT guidance that helps leaders make confident technology decisions and accelerate outcomes.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "IT Consulting & Strategy combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic it planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Strategic roadmap for IT Consulting & Strategy",
        "description": "Delivered a strategic roadmap for it consulting & strategy that drove measurable improvement for the organization.",
        "bullets": [
          "Defined a clear technology strategy and roadmap.",
          "Aligned IT priorities with business goals.",
          "Improved executive decision-making.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "IT governance and operating model for IT Consulting & Strategy",
        "description": "Delivered a it governance and operating model for it consulting & strategy that drove measurable improvement for the organization.",
        "bullets": [
          "Established governance and operating model.",
          "Reduced project ambiguity through structure.",
          "Increased stakeholder alignment.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Technology decision framework for IT Consulting & Strategy",
        "description": "Delivered a technology decision framework for it consulting & strategy that drove measurable improvement for the organization.",
        "bullets": [
          "Built a practical decision framework for technology choices.",
          "Reduced risk on strategic bets.",
          "Accelerated delivery with clear criteria.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Change readiness program for IT Consulting & Strategy",
        "description": "Delivered a change readiness program for it consulting & strategy that drove measurable improvement for the organization.",
        "bullets": [
          "Enabled smoother change through readiness planning.",
          "Improved adoption across teams.",
          "Reduced disruption during transformation.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with IT Consulting & Strategy?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "ecommerce": {
    "slug": "ecommerce",
    "title": "E-commerce Solutions",
    "category": "Digital Commerce",
    "heroImage": "/ecommerceimg.avif",
    "heroVideo": "/servicesvideo/ecommercevideo.mp4",
    "heroDescription": "High-performance commerce platforms built to convert customers, reduce friction, and scale revenue.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "E-commerce Solutions combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic e-commerce planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Omnichannel commerce launch for E-commerce Solutions",
        "description": "Delivered a omnichannel commerce launch for e-commerce solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Connected channels for seamless customer journeys.",
          "Reduced checkout friction.",
          "Boosted conversion through personalization.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Checkout conversion lift for E-commerce Solutions",
        "description": "Delivered a checkout conversion lift for e-commerce solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Improved cart completion with fast checkout.",
          "Optimized product discovery.",
          "Increased AOV through smarter merchandising.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Marketplace integration for E-commerce Solutions",
        "description": "Delivered a marketplace integration for e-commerce solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Integrated inventory, payments, and fulfillment.",
          "Improved partner onboarding.",
          "Enabled real-time commerce flows.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Personalized commerce experience for E-commerce Solutions",
        "description": "Delivered a personalized commerce experience for e-commerce solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered personalized campaigns at scale.",
          "Improved repeat purchase rates.",
          "Strengthened loyalty through experience.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with E-commerce Solutions?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "itsupport": {
    "slug": "itsupport",
    "title": "IT Support & Maintenance",
    "category": "Managed Services",
    "heroImage": "/sitsupport.jpeg",
    "heroDescription": "Reliable managed IT support that keeps systems healthy, responsive, and secure.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "IT Support & Maintenance combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic it planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "24/7 support operations for IT Support & Maintenance",
        "description": "Delivered a 24/7 support operations for it support & maintenance that drove measurable improvement for the organization.",
        "bullets": [
          "Enabled 24/7 support coverage with proactive monitoring.",
          "Reduced incident response time.",
          "Improved user satisfaction through faster service.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Service automation for IT Support & Maintenance",
        "description": "Delivered a service automation for it support & maintenance that drove measurable improvement for the organization.",
        "bullets": [
          "Automated repetitive support tasks.",
          "Improved ticket routing and escalation.",
          "Freed teams for higher-value work.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Infrastructure reliability for IT Support & Maintenance",
        "description": "Delivered a infrastructure reliability for it support & maintenance that drove measurable improvement for the organization.",
        "bullets": [
          "Improved infrastructure stability and uptime.",
          "Reduced service interruptions.",
          "Standardized operational processes.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Support experience improvement for IT Support & Maintenance",
        "description": "Delivered a support experience improvement for it support & maintenance that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a smoother support experience for end users.",
          "Improved transparency into issues.",
          "Reduced escalation volumes.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with IT Support & Maintenance?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "businessintelligence": {
    "slug": "businessintelligence",
    "title": "Business Intelligence & Analytics",
    "category": "Data Intelligence",
    "heroImage": "/sbi.jpg",
    "heroDescription": "Turn data into strategic insights with dashboards, analytics, and decision intelligence.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "We connect enterprise data sources into trusted analytics platforms that leaders can rely on.",
      "Our approach makes reporting, forecasting, and insight discovery intuitive for every team.",
      "We pair strong data governance with visual dashboards that surface what matters most."
    ],
    "bullets": [
      "Strategic business planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Analytics platform rollout for Business Intelligence & Analytics",
        "description": "Delivered a analytics platform rollout for business intelligence & analytics that drove measurable improvement for the organization.",
        "bullets": [
          "Built a trusted self-service analytics platform.",
          "Empowered teams with timely insights.",
          "Improved data-driven decision-making.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Executive insights for Business Intelligence & Analytics",
        "description": "Delivered a executive insights for business intelligence & analytics that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered executive dashboards for better oversight.",
          "Condensed key metrics into a single view.",
          "Improved leadership alignment.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Predictive analytics for Business Intelligence & Analytics",
        "description": "Delivered a predictive analytics for business intelligence & analytics that drove measurable improvement for the organization.",
        "bullets": [
          "Developed predictive models for business planning.",
          "Improved forecast accuracy.",
          "Delivered actionable insights from data.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Data trust foundation for Business Intelligence & Analytics",
        "description": "Delivered a data trust foundation for business intelligence & analytics that drove measurable improvement for the organization.",
        "bullets": [
          "Established strong data governance and trust.",
          "Improved reliability of reports.",
          "Reduced analytics friction across teams.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Business Intelligence & Analytics?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "cloudservices": {
    "slug": "cloudservices",
    "title": "Cloud Services",
    "category": "Cloud Transformation",
    "heroImage": "/scloudservices.jpeg",
    "heroDescription": "Cloud migration and managed computing solutions for resilient, scalable operations.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Cloud Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic cloud planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Cloud migration for Cloud Services",
        "description": "Delivered a cloud migration for cloud services that drove measurable improvement for the organization.",
        "bullets": [
          "Migrated applications to a scalable cloud environment.",
          "Reduced infrastructure complexity.",
          "Improved resilience and availability.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Infrastructure automation for Cloud Services",
        "description": "Delivered a infrastructure automation for cloud services that drove measurable improvement for the organization.",
        "bullets": [
          "Automated deployments and environment management.",
          "Reduced manual toil with infrastructure-as-code.",
          "Improved deployment confidence.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Resilience and scalability for Cloud Services",
        "description": "Delivered a resilience and scalability for cloud services that drove measurable improvement for the organization.",
        "bullets": [
          "Built a resilient cloud platform for growth.",
          "Improved failover and recovery.",
          "Reduced service disruptions.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "FinOps optimization for Cloud Services",
        "description": "Delivered a finops optimization for cloud services that drove measurable improvement for the organization.",
        "bullets": [
          "Identified cost savings across cloud resources.",
          "Optimized spend without sacrificing performance.",
          "Improved visibility into usage.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Cloud Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "cybersecurity": {
    "slug": "cybersecurity",
    "title": "Cybersecurity Services",
    "category": "Security Operations",
    "heroImage": "/scybersecurity.jpeg",
    "heroVideo": "/servicesvideo/cybersecurityvideo.mp4",
    "heroDescription": "Protect your business with proactive security, risk management, and compliance controls.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Cybersecurity Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Threat detection and response controls",
      "Security posture assessments and remediation",
      "Compliance-readiness for regulated environments",
      "Secure engineering for systems and platforms"
    ],
    "highlights": [
      {
        "title": "Risk assessments",
        "description": "Comprehensive security reviews to identify and reduce exposure."
      },
      {
        "title": "Secure architecture",
        "description": "Design solutions that protect data and operations from day one."
      },
      {
        "title": "Incident readiness",
        "description": "Preparedness and response frameworks for cyber events."
      },
      {
        "title": "Policy & governance",
        "description": "Practical compliance programs with operational controls."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Zero trust roadmap for Cybersecurity Services",
        "description": "Delivered a zero trust roadmap for cybersecurity services that drove measurable improvement for the organization.",
        "bullets": [
          "Implemented zero trust controls across the environment.",
          "Improved identity and access security.",
          "Reduced attack surface exposure.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Threat detection platform for Cybersecurity Services",
        "description": "Delivered a threat detection platform for cybersecurity services that drove measurable improvement for the organization.",
        "bullets": [
          "Deployed advanced threat detection and response.",
          "Improved security event visibility.",
          "Reduced mean time to detect.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Security operations upgrade for Cybersecurity Services",
        "description": "Delivered a security operations upgrade for cybersecurity services that drove measurable improvement for the organization.",
        "bullets": [
          "Built security operations workflows for faster response.",
          "Standardized incident handling.",
          "Improved team collaboration during events.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Compliance readiness for Cybersecurity Services",
        "description": "Delivered a compliance readiness for cybersecurity services that drove measurable improvement for the organization.",
        "bullets": [
          "Prepared the organization for audit and compliance.",
          "Reduced gaps in controls.",
          "Improved regulatory confidence.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Cybersecurity Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "networking": {
    "slug": "networking",
    "title": "Networking & Infrastructure",
    "category": "Network Engineering",
    "heroImage": "/snetwork.jpeg",
    "heroDescription": "Robust network architecture and infrastructure that powers secure, high-performance environments.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Networking & Infrastructure combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic networking planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Hybrid network transformation for Networking & Infrastructure",
        "description": "Delivered a hybrid network transformation for networking & infrastructure that drove measurable improvement for the organization.",
        "bullets": [
          "Modernized the hybrid network architecture.",
          "Improved performance across locations.",
          "Reduced network management overhead.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Performance and reliability for Networking & Infrastructure",
        "description": "Delivered a performance and reliability for networking & infrastructure that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered better reliability during traffic peaks.",
          "Improved network availability.",
          "Reduced latency for critical apps.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Edge connectivity for Networking & Infrastructure",
        "description": "Delivered a edge connectivity for networking & infrastructure that drove measurable improvement for the organization.",
        "bullets": [
          "Connected edge sites with secure links.",
          "Improved access for remote users.",
          "Enabled fast location-to-location traffic.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Network security and visibility for Networking & Infrastructure",
        "description": "Delivered a network security and visibility for networking & infrastructure that drove measurable improvement for the organization.",
        "bullets": [
          "Improved visibility into network health.",
          "Strengthened security at the perimeter.",
          "Reduced troubleshooting time.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Networking & Infrastructure?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "customintegration": {
    "slug": "customintegration",
    "title": "Custom Software Integration",
    "category": "System Integration",
    "heroImage": "/scustoionmintegrat.jpg",
    "heroVideo": "/servicesvideo/customintegrationvideo.mp4",
    "heroDescription": "Integrate systems and APIs seamlessly for better data flow and operational efficiency.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Custom Software Integration combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic custom planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "API-led integration for Custom Software Integration",
        "description": "Delivered a api-led integration for custom software integration that drove measurable improvement for the organization.",
        "bullets": [
          "Built an API-led integration platform.",
          "Connected disparate systems reliably.",
          "Improved data synchronization across apps.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Legacy systems connected for Custom Software Integration",
        "description": "Delivered a legacy systems connected for custom software integration that drove measurable improvement for the organization.",
        "bullets": [
          "Modernized legacy interfaces with modern endpoints.",
          "Reduced brittle custom code.",
          "Enabled easier maintenance.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Workflow automation for Custom Software Integration",
        "description": "Delivered a workflow automation for custom software integration that drove measurable improvement for the organization.",
        "bullets": [
          "Automated business workflows across systems.",
          "Reduced manual handoffs.",
          "Improved process accuracy.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Data orchestration for Custom Software Integration",
        "description": "Delivered a data orchestration for custom software integration that drove measurable improvement for the organization.",
        "bullets": [
          "Orchestrated data flows across applications.",
          "Improved end-to-end visibility.",
          "Reduced delays in cross-system processes.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Custom Software Integration?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "uiux": {
    "slug": "uiux",
    "title": "UI/UX Design & Prototyping",
    "category": "Design Experience",
    "heroImage": "/suiux.jpg",
    "heroDescription": "Design intuitive digital experiences that delight users and improve conversion.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "UI/UX Design & Prototyping combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic ui/ux planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Experience redesign for UI/UX Design & Prototyping",
        "description": "Delivered a experience redesign for ui/ux design & prototyping that drove measurable improvement for the organization.",
        "bullets": [
          "Redesigned the user experience for clarity.",
          "Improved navigation and interaction flow.",
          "Increased user satisfaction.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Rapid prototyping for UI/UX Design & Prototyping",
        "description": "Delivered a rapid prototyping for ui/ux design & prototyping that drove measurable improvement for the organization.",
        "bullets": [
          "Built interactive prototypes for fast validation.",
          "Reduced redesign cycles.",
          "Aligned stakeholders around the right experience.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Conversion-focused interface for UI/UX Design & Prototyping",
        "description": "Delivered a conversion-focused interface for ui/ux design & prototyping that drove measurable improvement for the organization.",
        "bullets": [
          "Optimized interface elements for conversion.",
          "Improved clarity in calls to action.",
          "Reduced user confusion.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Design system delivery for UI/UX Design & Prototyping",
        "description": "Delivered a design system delivery for ui/ux design & prototyping that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a reusable design system.",
          "Improved consistency across screens.",
          "Enabled faster product updates.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with UI/UX Design & Prototyping?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "saas": {
    "slug": "saas",
    "title": "SaaS Development",
    "category": "Platform Engineering",
    "heroImage": "/ssaas.jpg",
    "heroDescription": "Build scalable SaaS products with multi-tenant architecture, orchestration, and ongoing delivery.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "SaaS Development combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic saas planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "SaaS platform launch for SaaS Development",
        "description": "Delivered a saas platform launch for saas development that drove measurable improvement for the organization.",
        "bullets": [
          "Launched a multi-tenant SaaS platform.",
          "Improved onboarding for new customers.",
          "Delivered a scalable subscription model.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Subscription growth engine for SaaS Development",
        "description": "Delivered a subscription growth engine for saas development that drove measurable improvement for the organization.",
        "bullets": [
          "Built workflows to grow subscription revenue.",
          "Improved retention with better engagement.",
          "Enabled recurring value delivery.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Multi-tenant architecture for SaaS Development",
        "description": "Delivered a multi-tenant architecture for saas development that drove measurable improvement for the organization.",
        "bullets": [
          "Created a robust architecture for multi-tenancy.",
          "Improved security for shared environments.",
          "Enabled easier tenant onboarding.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Service operations automation for SaaS Development",
        "description": "Delivered a service operations automation for saas development that drove measurable improvement for the organization.",
        "bullets": [
          "Automated SaaS operations and support.",
          "Reduced manual management.",
          "Improved service stability.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with SaaS Development?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "api": {
    "slug": "api",
    "title": "API Development & Integration",
    "category": "Integration Engineering",
    "heroImage": "/sapi.jpg",
    "heroDescription": "Develop and integrate APIs that connect teams, systems, and experiences at scale.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "API Development & Integration combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic api planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "API platform delivery for API Development & Integration",
        "description": "Delivered a api platform delivery for api development & integration that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a developer-first API platform.",
          "Improved partner onboarding.",
          "Reduced integration friction.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Developer experience for API Development & Integration",
        "description": "Delivered a developer experience for api development & integration that drove measurable improvement for the organization.",
        "bullets": [
          "Improved API documentation and tooling.",
          "Increased developer adoption.",
          "Reduced support overhead.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Secure API lifecycle for API Development & Integration",
        "description": "Delivered a secure api lifecycle for api development & integration that drove measurable improvement for the organization.",
        "bullets": [
          "Secured the full API lifecycle.",
          "Improved access control and monitoring.",
          "Reduced integration risk.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Integrated service ecosystem for API Development & Integration",
        "description": "Delivered a integrated service ecosystem for api development & integration that drove measurable improvement for the organization.",
        "bullets": [
          "Connected digital experiences through APIs.",
          "Improved data flow across services.",
          "Enabled new partner ecosystems.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with API Development & Integration?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "ai": {
    "slug": "ai",
    "title": "AI & Machine Learning",
    "category": "Intelligent Systems",
    "heroImage": "/sai.jpeg",
    "heroVideo": "/servicesvideo/aivideo.mp4",
    "heroDescription": "Build AI-driven systems that automate workflows, personalize experiences, and increase efficiency.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "AI & Machine Learning combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic ai planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "AI roadmap for AI & Machine Learning",
        "description": "Delivered a ai roadmap for ai & machine learning that drove measurable improvement for the organization.",
        "bullets": [
          "Built a practical AI solution in production.",
          "Improved automation with intelligent models.",
          "Delivered measurable process improvements.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Machine learning at scale for AI & Machine Learning",
        "description": "Delivered a machine learning at scale for ai & machine learning that drove measurable improvement for the organization.",
        "bullets": [
          "Created predictive scoring for business decisions.",
          "Improved accuracy with real data.",
          "Enabled faster decision-making.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Intelligent automation for AI & Machine Learning",
        "description": "Delivered a intelligent automation for ai & machine learning that drove measurable improvement for the organization.",
        "bullets": [
          "Automated repeated work with AI assistance.",
          "Reduced manual tasks.",
          "Improved operational efficiency.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Predictive insights for AI & Machine Learning",
        "description": "Delivered a predictive insights for ai & machine learning that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered insights from advanced analytics.",
          "Improved forecasting and planning.",
          "Enabled smarter business actions.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with AI & Machine Learning?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "iot": {
    "slug": "iot",
    "title": "Internet of Things (IoT)",
    "category": "Connected Devices",
    "heroImage": "/siot.jpeg",
    "heroDescription": "Connect devices, data, and operations with IoT platforms for smarter automation and monitoring.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Internet of Things (IoT) combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic internet planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "IoT platform build for Internet of Things (IoT)",
        "description": "Delivered a iot platform build for internet of things (iot) that drove measurable improvement for the organization.",
        "bullets": [
          "Built a connected IoT platform.",
          "Improved sensor data capture.",
          "Enabled actionable operational insights.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Sensor data orchestration for Internet of Things (IoT)",
        "description": "Delivered a sensor data orchestration for internet of things (iot) that drove measurable improvement for the organization.",
        "bullets": [
          "Orchestrated device data across systems.",
          "Improved automation in the field.",
          "Reduced manual monitoring.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Predictive operations for Internet of Things (IoT)",
        "description": "Delivered a predictive operations for internet of things (iot) that drove measurable improvement for the organization.",
        "bullets": [
          "Enabled predictive maintenance with device telemetry.",
          "Improved equipment uptime.",
          "Reduced service disruption.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Connected product experiences for Internet of Things (IoT)",
        "description": "Delivered a connected product experiences for internet of things (iot) that drove measurable improvement for the organization.",
        "bullets": [
          "Created connected product experiences.",
          "Improved real-time visibility.",
          "Enabled smarter operations.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Internet of Things (IoT)?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "erpcrm": {
    "slug": "erpcrm",
    "title": "ERP & CRM Solutions",
    "category": "Enterprise Systems",
    "heroImage": "/serp.jpeg",
    "heroDescription": "Optimize business operations with ERP and CRM systems built for modern scale and adoption.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "ERP & CRM Solutions combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic erp planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "ERP modernization for ERP & CRM Solutions",
        "description": "Delivered a erp modernization for erp & crm solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered ERP modernization with clean processes.",
          "Improved data consistency across business functions.",
          "Reduced system complexity.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "CRM transformation for ERP & CRM Solutions",
        "description": "Delivered a crm transformation for erp & crm solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Transformed CRM for better customer engagement.",
          "Improved sales and service workflows.",
          "Enabled richer customer insights.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Unified operations for ERP & CRM Solutions",
        "description": "Delivered a unified operations for erp & crm solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Unified operations across finance, sales, and service.",
          "Improved collaboration across teams.",
          "Reduced duplicated effort.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Customer data harmonization for ERP & CRM Solutions",
        "description": "Delivered a customer data harmonization for erp & crm solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Harmonized customer data for better decisions.",
          "Improved visibility into customer history.",
          "Enabled a single source of truth.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with ERP & CRM Solutions?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "blockchain": {
    "slug": "blockchain",
    "title": "Blockchain & Web3 Solutions",
    "category": "Distributed Ledger",
    "heroImage": "/sblockchain.jpeg",
    "heroDescription": "Leverage blockchain, Web3, and smart contracts for secure digital collaboration and tokenization.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Blockchain & Web3 Solutions combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic blockchain planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Blockchain proof of value for Blockchain & Web3 Solutions",
        "description": "Delivered a blockchain proof of value for blockchain & web3 solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Deployed a blockchain solution for traceability.",
          "Improved trust across partners.",
          "Enabled secure transactions.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Smart contracts for Blockchain & Web3 Solutions",
        "description": "Delivered a smart contracts for blockchain & web3 solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Created smart contracts for automation.",
          "Reduced manual reconciliation.",
          "Improved settlement accuracy.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Trusted transaction network for Blockchain & Web3 Solutions",
        "description": "Delivered a trusted transaction network for blockchain & web3 solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Connected digital assets with reliable controls.",
          "Improved transaction transparency.",
          "Enabled audit-ready records.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Digital asset platform for Blockchain & Web3 Solutions",
        "description": "Delivered a digital asset platform for blockchain & web3 solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Built a distributed ledger for collaboration.",
          "Improved partner confidence.",
          "Reduced reconciliation overhead.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Blockchain & Web3 Solutions?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "devops": {
    "slug": "devops",
    "title": "DevOps & Automation Services",
    "category": "Automation Engineering",
    "heroImage": "/sdevops.jpg",
    "heroDescription": "Automate delivery pipelines and operations for faster, safer software releases.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "DevOps & Automation Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic devops planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "CI/CD pipeline for DevOps & Automation Services",
        "description": "Delivered a ci/cd pipeline for devops & automation services that drove measurable improvement for the organization.",
        "bullets": [
          "Built a CI/CD pipeline for faster releases.",
          "Improved deployment reliability.",
          "Reduced manual release effort.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Release automation for DevOps & Automation Services",
        "description": "Delivered a release automation for devops & automation services that drove measurable improvement for the organization.",
        "bullets": [
          "Automated environment provisioning.",
          "Improved consistency across stages.",
          "Reduced setup time.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Infrastructure as code for DevOps & Automation Services",
        "description": "Delivered a infrastructure as code for devops & automation services that drove measurable improvement for the organization.",
        "bullets": [
          "Standardized infrastructure as code.",
          "Improved change traceability.",
          "Reduced configuration drift.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Operational maturity for DevOps & Automation Services",
        "description": "Delivered a operational maturity for devops & automation services that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered stronger operational maturity.",
          "Improved incident handling.",
          "Reduced outages.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with DevOps & Automation Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "mobileapp": {
    "slug": "mobileapp",
    "title": "Mobile App Development",
    "category": "Mobile Engineering",
    "heroImage": "/smobileapp.jpg",
    "heroVideo": "/servicesvideo/mobileappvideo.mp4",
    "heroDescription": "Build powerful iOS and Android apps with intuitive interfaces and native performance.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Mobile App Development combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic mobile planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Mobile launch for Mobile App Development",
        "description": "Delivered a mobile launch for mobile app development that drove measurable improvement for the organization.",
        "bullets": [
          "Launched a high-performing mobile app.",
          "Improved app store engagement.",
          "Delivered faster release cycles.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "App performance optimization for Mobile App Development",
        "description": "Delivered a app performance optimization for mobile app development that drove measurable improvement for the organization.",
        "bullets": [
          "Optimized mobile performance and UX.",
          "Reduced load times.",
          "Improved user engagement.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Connected mobile journey for Mobile App Development",
        "description": "Delivered a connected mobile journey for mobile app development that drove measurable improvement for the organization.",
        "bullets": [
          "Created a connected mobile experience.",
          "Improved data sync across devices.",
          "Enabled seamless user journeys.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Engagement growth for Mobile App Development",
        "description": "Delivered a engagement growth for mobile app development that drove measurable improvement for the organization.",
        "bullets": [
          "Boosted retention through feature personalization.",
          "Improved mobile onboarding.",
          "Delivered measurable growth.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Mobile App Development?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "webdevelopment": {
    "slug": "webdevelopment",
    "title": "Web Development & Design",
    "category": "Web Experience",
    "heroImage": "/swebDesign.jpeg",
    "heroDescription": "Create modern websites and digital platforms that engage users and support growth.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Web Development & Design combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic web planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Web platform relaunch for Web Development & Design",
        "description": "Delivered a web platform relaunch for web development & design that drove measurable improvement for the organization.",
        "bullets": [
          "Relaunched the web experience for {title}.",
          "Improved web performance and accessibility.",
          "Reduced bounce rates.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Performance and accessibility for Web Development & Design",
        "description": "Delivered a performance and accessibility for web development & design that drove measurable improvement for the organization.",
        "bullets": [
          "Built a headless digital experience.",
          "Improved content flexibility.",
          "Enabled faster updates.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Headless web experience for Web Development & Design",
        "description": "Delivered a headless web experience for web development & design that drove measurable improvement for the organization.",
        "bullets": [
          "Optimized web journeys for conversion.",
          "Improved page speed and reliability.",
          "Enhanced user interactions.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Conversion-oriented web design for Web Development & Design",
        "description": "Delivered a conversion-oriented web design for web development & design that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered consistent cross-device design.",
          "Improved mobile responsiveness.",
          "Reduced design debt.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Web Development & Design?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "vrar": {
    "slug": "vrar",
    "title": "VR/AR Solutions",
    "category": "Immersive Experiences",
    "heroImage": "/svrar.jpg",
    "heroVideo": "/servicesvideo/vrarvideo.mp4",
    "heroDescription": "Develop immersive VR and AR experiences for training, marketing, and engagement.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "VR/AR Solutions combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic vr/ar planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Immersive experience for VR/AR Solutions",
        "description": "Delivered a immersive experience for vr/ar solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Built an immersive experience for {title}.",
          "Improved engagement with interactive content.",
          "Delivered a memorable user journey.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "VR training solution for VR/AR Solutions",
        "description": "Delivered a vr training solution for vr/ar solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Launched a VR training environment.",
          "Improved learning retention.",
          "Enabled experiential training.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "AR engagement platform for VR/AR Solutions",
        "description": "Delivered a ar engagement platform for vr/ar solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Created an AR engagement platform.",
          "Improved real-world interaction.",
          "Delivered context-aware experiences.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Mixed reality showcase for VR/AR Solutions",
        "description": "Delivered a mixed reality showcase for vr/ar solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Showcased products in mixed reality.",
          "Improved immersion and storytelling.",
          "Enabled richer visualization.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with VR/AR Solutions?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "projectmanagement": {
    "slug": "projectmanagement",
    "title": "IT Project Management",
    "category": "Delivery Management",
    "heroImage": "/sprojectmgmt.jpg",
    "heroDescription": "Manage complex IT initiatives with clarity, accountability, and predictable execution.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "IT Project Management combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic it planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Program governance for IT Project Management",
        "description": "Delivered a program governance for it project management that drove measurable improvement for the organization.",
        "bullets": [
          "Defined a delivery governance model for {title}.",
          "Improved cross-team execution.",
          "Reduced project risk.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Delivery coordination for IT Project Management",
        "description": "Delivered a delivery coordination for it project management that drove measurable improvement for the organization.",
        "bullets": [
          "Coordinated complex programs effectively.",
          "Improved timeline visibility.",
          "Aligned stakeholders to outcomes.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Portfolio acceleration for IT Project Management",
        "description": "Delivered a portfolio acceleration for it project management that drove measurable improvement for the organization.",
        "bullets": [
          "Optimized portfolio delivery.",
          "Improved resource allocation.",
          "Increased on-time delivery.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Execution discipline for IT Project Management",
        "description": "Delivered a execution discipline for it project management that drove measurable improvement for the organization.",
        "bullets": [
          "Built a disciplined execution framework.",
          "Reduced bottlenecks.",
          "Improved predictability.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with IT Project Management?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "rpa": {
    "slug": "rpa",
    "title": "Robotic Process Automation (RPA)",
    "category": "Automation Services",
    "heroImage": "/srpa.jpg",
    "heroVideo": "/servicesvideo/rpavideo.mp4",
    "heroDescription": "Automate repetitive business tasks with intelligent RPA workflows that save time and cost.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Robotic Process Automation (RPA) combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic robotic planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "RPA rollout for Robotic Process Automation (RPA)",
        "description": "Delivered a rpa rollout for robotic process automation (rpa) that drove measurable improvement for the organization.",
        "bullets": [
          "Rolled out RPA bots for {title}.",
          "Reduced manual processing.",
          "Improved throughput.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Process automation for Robotic Process Automation (RPA)",
        "description": "Delivered a process automation for robotic process automation (rpa) that drove measurable improvement for the organization.",
        "bullets": [
          "Automated repetitive workflows.",
          "Improved process reliability.",
          "Reduced human error.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Bot orchestration for Robotic Process Automation (RPA)",
        "description": "Delivered a bot orchestration for robotic process automation (rpa) that drove measurable improvement for the organization.",
        "bullets": [
          "Orchestrated bot operations.",
          "Enhanced automation coverage.",
          "Improved visibility.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Manual work elimination for Robotic Process Automation (RPA)",
        "description": "Delivered a manual work elimination for robotic process automation (rpa) that drove measurable improvement for the organization.",
        "bullets": [
          "Eliminated manual handoffs.",
          "Improved speed of execution.",
          "Increased process consistency.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Robotic Process Automation (RPA)?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "training": {
    "slug": "training",
    "title": "IT Training & Skill Development",
    "category": "Learning Services",
    "heroImage": "/straining.jpg",
    "heroDescription": "Empower teams with training programs that improve technology adoption and delivery skills.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "IT Training & Skill Development combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic it planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Capability build for IT Training & Skill Development",
        "description": "Delivered a capability build for it training & skill development that drove measurable improvement for the organization.",
        "bullets": [
          "Built a training program for {title}.",
          "Improved team skill levels.",
          "Increased knowledge retention.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Learning program for IT Training & Skill Development",
        "description": "Delivered a learning program for it training & skill development that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered learning pathways.",
          "Improved engagement with practical content.",
          "Enabled better performance.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Skills adoption for IT Training & Skill Development",
        "description": "Delivered a skills adoption for it training & skill development that drove measurable improvement for the organization.",
        "bullets": [
          "Launched capability-building initiatives.",
          "Improved adoption of new practices.",
          "Reduced knowledge gaps.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Training transformation for IT Training & Skill Development",
        "description": "Delivered a training transformation for it training & skill development that drove measurable improvement for the organization.",
        "bullets": [
          "Transformed how teams learn and grow.",
          "Improved training effectiveness.",
          "Increased confidence.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with IT Training & Skill Development?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "gamedev": {
    "slug": "gamedev",
    "title": "Game Development",
    "category": "Interactive Entertainment",
    "heroImage": "/sgamedev.jpg",
    "heroDescription": "Design and build engaging games for mobile, web, and immersive platforms.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Game Development combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Engaging experience design for games and interactive apps",
      "Cross-platform development for mobile, console, and browser",
      "Performance optimization for immersive play",
      "Creative storytelling with polished delivery"
    ],
    "highlights": [
      {
        "title": "Immersive design",
        "description": "Craft compelling worlds and game experiences that keep users engaged."
      },
      {
        "title": "Cross-platform builds",
        "description": "Deliver games across mobile, web, and immersive devices."
      },
      {
        "title": "Performance engineering",
        "description": "Optimized performance and stability for every device."
      },
      {
        "title": "Creative production",
        "description": "From concept to launch, we support every stage of game development."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Interactive game launch for Game Development",
        "description": "Delivered a interactive game launch for game development that drove measurable improvement for the organization.",
        "bullets": [
          "Produced an interactive game for {title}.",
          "Improved player engagement.",
          "Delivered cross-platform experiences.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Experience production for Game Development",
        "description": "Delivered a experience production for game development that drove measurable improvement for the organization.",
        "bullets": [
          "Built immersive storytelling for {title}.",
          "Improved retention with compelling content.",
          "Enabled play across devices.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Cross-platform publishing for Game Development",
        "description": "Delivered a cross-platform publishing for game development that drove measurable improvement for the organization.",
        "bullets": [
          "Published to multiple platforms.",
          "Optimized performance for players.",
          "Improved launch readiness.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Engagement analytics for Game Development",
        "description": "Delivered a engagement analytics for game development that drove measurable improvement for the organization.",
        "bullets": [
          "Measured engagement with analytics.",
          "Improved player feedback loops.",
          "Enabled ongoing improvement.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Game Development?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "compliance": {
    "slug": "compliance",
    "title": "IT Compliance & Risk Management",
    "category": "Governance Services",
    "heroImage": "/scompliance.jpg",
    "heroDescription": "Maintain compliance, reduce risk, and strengthen controls with expert governance services.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "IT Compliance & Risk Management combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic it planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Regulatory readiness for IT Compliance & Risk Management",
        "description": "Delivered a regulatory readiness for it compliance & risk management that drove measurable improvement for the organization.",
        "bullets": [
          "Built a compliance program for {title}.",
          "Improved audit readiness.",
          "Standardized policies.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Audit preparation for IT Compliance & Risk Management",
        "description": "Delivered a audit preparation for it compliance & risk management that drove measurable improvement for the organization.",
        "bullets": [
          "Prepared for regulatory review.",
          "Reduced control gaps.",
          "Improved evidence collection.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Control framework for IT Compliance & Risk Management",
        "description": "Delivered a control framework for it compliance & risk management that drove measurable improvement for the organization.",
        "bullets": [
          "Established effective controls.",
          "Reduced operational risk.",
          "Improved adherence.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      },
      {
        "title": "Risk reduction for IT Compliance & Risk Management",
        "description": "Delivered a risk reduction for it compliance & risk management that drove measurable improvement for the organization.",
        "bullets": [
          "Strengthened risk reporting.",
          "Improved oversight.",
          "Enabled confident decision-making.",
        ],
        "image": "/servicesimages/online-banking.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with IT Compliance & Risk Management?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "managedit": {
    "slug": "managedit",
    "title": "Managed IT Services",
    "category": "Operations Services",
    "heroImage": "/smanagedit.jpg",
    "heroDescription": "Comprehensive managed services that keep technology operations stable and efficient.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Managed IT Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic managed planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Managed services optimization for Managed IT Services",
        "description": "Delivered a managed services optimization for managed it services that drove measurable improvement for the organization.",
        "bullets": [
          "Consolidated managed services for {title}.",
          "Improved operational consistency.",
          "Delivered proactive monitoring.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Proactive operations for Managed IT Services",
        "description": "Delivered a proactive operations for managed it services that drove measurable improvement for the organization.",
        "bullets": [
          "Improved workplace experience.",
          "Reduced support friction.",
          "Increased responsiveness.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Workplace experience improvement for Managed IT Services",
        "description": "Delivered a workplace experience improvement for managed it services that drove measurable improvement for the organization.",
        "bullets": [
          "Streamlined service delivery.",
          "Improved SLAs.",
          "Reduced downtime.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Service level consistency for Managed IT Services",
        "description": "Delivered a service level consistency for managed it services that drove measurable improvement for the organization.",
        "bullets": [
          "Built a stronger managed operations model.",
          "Improved reliability.",
          "Simplified management.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Managed IT Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "qa": {
    "slug": "qa",
    "title": "Quality Assurance & Testing Services",
    "category": "Quality Engineering",
    "heroImage": "/sqa.jpg",
    "heroDescription": "Ensure software reliability and quality with expert testing and validation services.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Quality Assurance & Testing Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic quality planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Quality engineering for Quality Assurance & Testing Services",
        "description": "Delivered a quality engineering for quality assurance & testing services that drove measurable improvement for the organization.",
        "bullets": [
          "Built quality engineering for {title}.",
          "Improved testing reliability.",
          "Reduced release risk.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Test automation for Quality Assurance & Testing Services",
        "description": "Delivered a test automation for quality assurance & testing services that drove measurable improvement for the organization.",
        "bullets": [
          "Automated test pipelines for {title}.",
          "Improved feedback loops.",
          "Increased execution speed.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Release confidence for Quality Assurance & Testing Services",
        "description": "Delivered a release confidence for quality assurance & testing services that drove measurable improvement for the organization.",
        "bullets": [
          "Built confidence in releases.",
          "Reduced defects in production.",
          "Improved regression coverage.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Defect reduction for Quality Assurance & Testing Services",
        "description": "Delivered a defect reduction for quality assurance & testing services that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered faster validation cycles.",
          "Improved release readiness.",
          "Enhanced quality visibility.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Quality Assurance & Testing Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "legacy": {
    "slug": "legacy",
    "title": "Legacy System Modernization",
    "category": "Modernization Services",
    "heroImage": "/slegacy.jpg",
    "heroDescription": "Modernize legacy systems to improve performance, usability, and maintainability.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Legacy System Modernization combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic legacy planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Legacy modernization for Legacy System Modernization",
        "description": "Delivered a legacy modernization for legacy system modernization that drove measurable improvement for the organization.",
        "bullets": [
          "Modernized legacy systems for {title}.",
          "Reduced technical debt.",
          "Improved stability.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Technical debt reduction for Legacy System Modernization",
        "description": "Delivered a technical debt reduction for legacy system modernization that drove measurable improvement for the organization.",
        "bullets": [
          "Replatformed key applications.",
          "Lowered maintenance effort.",
          "Enabled new capabilities.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Replatforming for Legacy System Modernization",
        "description": "Delivered a replatforming for legacy system modernization that drove measurable improvement for the organization.",
        "bullets": [
          "Improved system reliability.",
          "Reduced support costs.",
          "Enhanced performance.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      },
      {
        "title": "Stability and transition for Legacy System Modernization",
        "description": "Delivered a stability and transition for legacy system modernization that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a smooth transition program.",
          "Reduced migration risk.",
          "Improved operational readiness.",
        ],
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Legacy System Modernization?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "bigdata": {
    "slug": "bigdata",
    "title": "Big Data Solutions",
    "category": "Data Engineering",
    "heroImage": "/sbigdata.jpg",
    "heroDescription": "Process, analyze, and visualize large-scale data to extract business value and insight.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Big Data Solutions combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic big planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Big data platform for Big Data Solutions",
        "description": "Delivered a big data platform for big data solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Built a big data platform for {title}.",
          "Enabled high-volume analytics.",
          "Improved insight velocity.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "High-volume analytics for Big Data Solutions",
        "description": "Delivered a high-volume analytics for big data solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered streaming analytics capabilities.",
          "Improved real-time decisioning.",
          "Reduced data latency.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Streaming insights for Big Data Solutions",
        "description": "Delivered a streaming insights for big data solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Modernized data warehouse and lake architecture.",
          "Improved data availability.",
          "Enhanced query performance.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Data lake delivery for Big Data Solutions",
        "description": "Delivered a data lake delivery for big data solutions that drove measurable improvement for the organization.",
        "bullets": [
          "Established a scalable analytics foundation.",
          "Improved team self-service.",
          "Reduced reporting friction.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Big Data Solutions?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "dataservices": {
    "slug": "dataservices",
 "title": "Data Services",
    "category": "Data Operations",
    "heroImage": "/sdataservices.jpeg",
    "heroVideo": "/servicesvideo/dataservicesvideo.mp4",
    "heroDescription": "Manage, migrate, and analyze data with secure and scalable data services.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Data Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic data planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Data operations platform for Data Services",
        "description": "Delivered a data operations platform for data services that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a data operations platform for {title}.",
          "Standardized data delivery.",
          "Improved reliability.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Data API delivery for Data Services",
        "description": "Delivered a data api delivery for data services that drove measurable improvement for the organization.",
        "bullets": [
          "Built a data API layer.",
          "Improved data access for systems.",
          "Enabled faster integration.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Quality and governance for Data Services",
        "description": "Delivered a quality and governance for data services that drove measurable improvement for the organization.",
        "bullets": [
          "Improved data quality and governance.",
          "Reduced data errors.",
          "Increased trust.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      },
      {
        "title": "Cross-source analytics for Data Services",
        "description": "Delivered a cross-source analytics for data services that drove measurable improvement for the organization.",
        "bullets": [
          "Connected analytics across sources.",
          "Improved insights through unified data.",
          "Reduced data silos.",
        ],
        "image": "/servicesimages/healthcareai.jpg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Data Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "embedded": {
    "slug": "embedded",
    "title": "Embedded Systems",
    "category": "Embedded Engineering",
    "heroImage": "/sembedded.jpg",
    "heroDescription": "Design and develop embedded software for smart devices, industrial systems, and IoT hardware.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Embedded Systems combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic embedded planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Embedded systems platform for Embedded Systems",
        "description": "Delivered a embedded systems platform for embedded systems that drove measurable improvement for the organization.",
        "bullets": [
          "Launched embedded systems for {title}.",
          "Improved device connectivity.",
          "Delivered real-time control.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Connected device software for Embedded Systems",
        "description": "Delivered a connected device software for embedded systems that drove measurable improvement for the organization.",
        "bullets": [
          "Built firmware and software integration.",
          "Improved reliability at the edge.",
          "Enabled smoother updates.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Edge integration for Embedded Systems",
        "description": "Delivered a edge integration for embedded systems that drove measurable improvement for the organization.",
        "bullets": [
          "Integrated embedded workflows with backend systems.",
          "Improved data flow.",
          "Reduced maintenance cycles.",
        ],
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "title": "Real-time embedded experiences for Embedded Systems",
        "description": "Delivered a real-time embedded experiences for embedded systems that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a complete embedded solution.",
          "Improved operational visibility.",
          "Enhanced user experience.",
        ],
        "image": "/servicesimages/finance.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Embedded Systems?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  },
  "digitalmarketing": {
    "slug": "digitalmarketing",
    "title": "Digital Marketing & SEO Services",
    "category": "Marketing Services",
    "heroImage": "/smarketing.jpg",
    "heroDescription": "Boost visibility and growth with digital marketing, SEO, and performance campaigns.",
    "heroCta": "Talk to Us",
    "heroSubtext": "Partner with specialists who deliver secure, scalable, and measurable outcomes.",
    "overview": [
      "Digital Marketing & SEO Services combines industry best practices with modern technology to solve complex challenges for your organization.",
      "We deliver practical solutions that balance speed, security, and long-term resilience.",
      "Our approach is built around clear business outcomes, efficient execution, and measurable impact."
    ],
    "bullets": [
      "Strategic digital planning and execution",
      "Expert team collaboration and delivery discipline",
      "Secure, scalable architecture and integration",
      "Focused on outcomes, value, and measurable progress"
    ],
    "highlights": [
      {
        "title": "Strategic planning",
        "description": "We align technology decisions with your business roadmap."
      },
      {
        "title": "Modern engineering",
        "description": "High-quality delivery with cloud-ready architecture and automation."
      },
      {
        "title": "Security first",
        "description": "Every engagement includes security, compliance, and risk controls."
      },
      {
        "title": "Continuous improvement",
        "description": "We optimize the solution as your business evolves."
      }
    ],
    "stats": [
      {
        "value": "1000+",
        "label": "Enterprise projects delivered"
      },
      {
        "value": "65+",
        "label": "Countries supported"
      },
      {
        "value": "24/7",
        "label": "Operational coverage"
      },
      {
        "value": "98%",
        "label": "Customer satisfaction"
      }
    ],
    "industries": [
      {
        "name": "Finance",
        "description": "Secure, compliant technology for financial services and payments.",
        "image": "/servicesimages/finance.jpeg"
      },
      {
        "name": "Healthcare",
        "description": "Digital solutions that improve care delivery, compliance, and efficiency.",
        "image": "/servicesimages/helthcare.jpeg"
      },
      {
        "name": "Retail",
        "description": "Experience-driven commerce and operations for modern retail brands.",
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "name": "Manufacturing",
        "description": "Connected systems and analytics that optimize manufacturing performance.",
        "image": "/servicesimages/manufacturing.jpeg"
      }
    ],
    "caseStudies": [
      {
        "title": "Digital campaign transformation for Digital Marketing & SEO Services",
        "description": "Delivered a digital campaign transformation for digital marketing & seo services that drove measurable improvement for the organization.",
        "bullets": [
          "Transformed digital campaigns for {title}.",
          "Improved audience reach.",
          "Increased engagement.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Marketing automation for Digital Marketing & SEO Services",
        "description": "Delivered a marketing automation for digital marketing & seo services that drove measurable improvement for the organization.",
        "bullets": [
          "Automated marketing workflows.",
          "Improved campaign ROI.",
          "Enabled smarter targeting.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Audience growth for Digital Marketing & SEO Services",
        "description": "Delivered a audience growth for digital marketing & seo services that drove measurable improvement for the organization.",
        "bullets": [
          "Grew audiences across channels.",
          "Improved conversion performance.",
          "Reduced acquisition costs.",
        ],
        "image": "/servicesimages/retail.jpeg"
      },
      {
        "title": "Brand experience optimization for Digital Marketing & SEO Services",
        "description": "Delivered a brand experience optimization for digital marketing & seo services that drove measurable improvement for the organization.",
        "bullets": [
          "Delivered a stronger brand experience.",
          "Improved creative consistency.",
          "Enhanced campaign execution.",
        ],
        "image": "/servicesimages/retail.jpeg"
      }
    ],
    "ctaHeading": "Ready to accelerate with Digital Marketing & SEO Services?",
    "closing": "Our team is ready to help you move from concept to launch with confidence, clarity, and measurable impact.",
    "ctaLink": "/contact"
  }
}
