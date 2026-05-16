"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CaseStudy {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

interface Props {
  caseStudies: CaseStudy[];
  serviceTitle: string;
}

export default function CaseStudyCarousel({ caseStudies, serviceTitle }: Props) {
  const [index, setIndex] = useState(0);

  const placeholderSlides: CaseStudy[] = [
    {
      title: `${serviceTitle} platform modernization`,
      description: `Modernized infrastructure and delivery processes to support rapid growth and reduce operational risk.`,
      bullets: [
        "Improved performance and resilience",
        "Reduced time-to-market for new features",
        "Standardized governance and reporting",
      ],
      image: "/servicesimages/finance.jpeg",
    },
    {
      title: `Accelerated ${serviceTitle} user adoption`,
      description: `Created a user-centered strategy and execution plan that improved adoption and satisfaction across the organization.`,
      bullets: [
        "Focused product experience improvements",
        "Aligned teams around shared KPIs",
        "Delivered measurable business impact",
      ],
      image: "/servicesimages/retail.jpeg",
    },
    {
      title: `${serviceTitle} security and compliance upgrade`,
      description: `Implemented stronger controls, monitoring, and incident readiness without slowing down delivery.`,
      bullets: [
        "Enhanced risk visibility",
        "Improved compliance posture",
        "Enabled secure scaling",
      ],
      image: "/servicesimages/helthcare.jpeg",
    },
    {
      title: `${serviceTitle} digital transformation`,
      description: `Delivered a cohesive digital experience powered by automation, data, and cross-team collaboration.`,
      bullets: [
        "Unified product and ops systems",
        "Streamlined workflows",
        "Accelerated business outcomes",
      ],
      image: "/servicesimages/manufacturing.jpeg",
    },
  ];

  const slides: CaseStudy[] = (() => {
    const out = [...caseStudies];
    let i = 0;
    while (out.length < 4) {
      const placeholder = placeholderSlides[i % placeholderSlides.length];
      if (!out.find((item) => item.title === placeholder.title)) {
        out.push(placeholder);
      }
      i++;
      if (i > 8) break;
    }
    return out.length > 0 ? out : [placeholderSlides[0], placeholderSlides[1], placeholderSlides[2], placeholderSlides[3]];
  })();

  useEffect(() => {
    const t = setInterval(() => setIndex((s) => (s + 1) % slides.length), 2000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="mt-10">
      <div className="relative h-80 overflow-hidden rounded-2xl">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="grid h-full grid-cols-1 lg:grid-cols-2 items-stretch">
              <div className="relative h-80 lg:h-full">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-center bg-slate-950">
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">{s.title}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{s.description}</p>
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950">
                    Discuss this outcome
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 justify-center">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${i === index ? "bg-emerald-400" : "bg-white/30"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
