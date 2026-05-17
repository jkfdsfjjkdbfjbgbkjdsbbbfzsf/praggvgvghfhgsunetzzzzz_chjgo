import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import CaseStudyCarousel from "@/components/service/CaseStudyCarousel";
import { ServiceDetail } from "@/lib/serviceDetails";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

const secondaryVideos = [
  "/servicesvideo/saasvideo.mp4",
  "/servicesvideo/blockchainvideo.mp4",
  "/servicesvideo/businessintelligencevideo.mp4",
  "/servicesvideo/qavideo.mp4",
  "/servicesvideo/rpavideo.mp4",
  "/servicesvideo/vrarvideo.mp4",
  "/servicesvideo/manageditvideo.mp4",
  "/servicesvideo/webdevelopmentvideo.mp4",
  "/servicesvideo/uiuxvideo.mp4",
  "/servicesvideo/dataservicesvideo.mp4",
  "/servicesvideo/iotvideo.mp4",
  "/servicesvideo/mobileappvideo.mp4",
  "/servicesvideo/aivideo.mp4",
  "/servicesvideo/customintegrationvideo.mp4",
  "/servicesvideo/itparkvideo.mp4",
  "/servicesvideo/legacyvideo.mp4",
  "/servicesvideo/ecommercevideo.mp4",
  "/servicesvideo/digitalmarketingvideo.mp4",
  "/servicesvideo/projectmanagementvideo.mp4",
  "/servicesvideo/cybersecurityvideo.mp4",
  "/servicesvideo/apivideo.mp4",
  "/servicesvideo/softwaredevlopmentvideo.mp4",
  "/servicesvideo/itconsultingvideo.mp4",
  "/servicesvideo/compliancevideo.mp4",
  "/servicesvideo/trainingvideo.mp4",
  "/servicesvideo/devopsvideo.mp4",
  "/servicesvideo/networkingvideo.mp4",
  "/servicesvideo/bigdatavideo.mp4",
  "/servicesvideo/itsupportvideo.mp4",
  "/servicesvideo/gamedevvideo.mp4",
  "/servicesvideo/cloudservicesvideo.mp4",
  "/servicesvideo/erpcrmvideo.mp4",
];

const getDeterministicIndex = (key: string, max: number) => {
  let hash = 0;
  for (const char of key) {
    hash = (hash * 31 + char.charCodeAt(0)) % max;
  }
  return hash;
};

const heroThemeMap: Record<string, string> = {
  ai: "intelligent",
  bigdata: "intelligent",
  businessintelligence: "intelligent",
  dataservices: "intelligent",
  cybersecurity: "shield",
  compliance: "shield",
  ecommerce: "commerce",
  webdevelopment: "commerce",
  mobileapp: "commerce",
  uiux: "commerce",
  digitalmarketing: "commerce",
  cloudservices: "cloud",
  devops: "cloud",
  managedit: "cloud",
  networking: "cloud",
  itsupport: "cloud",
  rpa: "automation",
  customintegration: "automation",
  projectmanagement: "advisory",
  itconsulting: "advisory",
  training: "advisory",
  vrar: "immersive",
  gamedev: "immersive",
  blockchain: "immersive",
  iot: "immersive",
  embedded: "immersive",
};

const caseStudyImages = [
  "/casestudy1.jpg",
  "/casestudy2.png",
  "/casestudy3.png",
  "/casestudy4.jpg",
  "/casestudy5.webp",
  "/casestudy6.webp",
  "/casestudy7.jpeg",
  "/casestudy8.jpg",
  "/casestudy9.jpg",
  "/casestudy10.jpg",
  "/casestudy11.jpg",
  "/casestudy12.jpg",
  "/casestudy13.jpg",
];

const getCaseStudyImagesForService = (serviceKey: string) => {
  const startIndex = getDeterministicIndex(serviceKey, caseStudyImages.length);
  return caseStudyImages.map((_, index) => caseStudyImages[(startIndex + index) % caseStudyImages.length]);
};

const heroThemes: Record<string, Record<string, string>> = {
  media: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/70",
    contentClass: "",
    badgeClass: "bg-emerald-500/15 text-emerald-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-emerald-500 text-white hover:bg-emerald-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-emerald-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  modern: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/80",
    contentClass: "",
    badgeClass: "bg-emerald-500/15 text-emerald-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-emerald-500 text-white hover:bg-emerald-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-white/10",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  shield: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/75 from-slate-950 via-slate-900",
    contentClass: "",
    badgeClass: "bg-cyan-500/10 text-cyan-200",
    titleClass: "text-white",
    introClass: "text-slate-300",
    buttonPrimary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-cyan-400/20",
    gridClass: "lg:grid-cols-[1.15fr_0.85fr]"
  },
  strategy: {
    sectionClass: "bg-indigo-950",
    overlayClass: "bg-indigo-950/80",
    contentClass: "",
    badgeClass: "bg-indigo-500/15 text-indigo-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-indigo-500 text-white hover:bg-indigo-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-indigo-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  studio: {
    sectionClass: "bg-slate-900",
    overlayClass: "bg-slate-900/70",
    contentClass: "",
    badgeClass: "bg-fuchsia-500/15 text-fuchsia-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-fuchsia-500 text-white hover:bg-fuchsia-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-950/80 border border-fuchsia-400/20",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  commerce: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/80",
    contentClass: "",
    badgeClass: "bg-amber-500/15 text-amber-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-amber-500 text-slate-950 hover:bg-amber-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-amber-400/20",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  cloud: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/75",
    contentClass: "",
    badgeClass: "bg-cyan-400/15 text-cyan-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-cyan-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  automation: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/75",
    contentClass: "",
    badgeClass: "bg-emerald-400/15 text-emerald-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-emerald-500 text-white hover:bg-emerald-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-emerald-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  advisory: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/75",
    contentClass: "",
    badgeClass: "bg-violet-500/15 text-violet-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-violet-500 text-white hover:bg-violet-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-violet-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  immersive: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/75",
    contentClass: "",
    badgeClass: "bg-purple-500/15 text-purple-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-purple-500 text-white hover:bg-purple-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-purple-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
  intelligent: {
    sectionClass: "bg-slate-950",
    overlayClass: "bg-slate-950/78",
    contentClass: "",
    badgeClass: "bg-teal-500/15 text-teal-200",
    titleClass: "text-white",
    introClass: "text-slate-200",
    buttonPrimary: "bg-teal-500 text-slate-950 hover:bg-teal-400",
    buttonSecondary: "bg-white text-slate-950 hover:bg-slate-100",
    cardClass: "bg-slate-900/80 border border-teal-400/15",
    gridClass: "lg:grid-cols-[1.05fr_0.95fr]"
  },
};

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const variant = heroThemeMap[service.slug] ?? (service.heroVideo
    ? "media"
    : service.category.toLowerCase().includes("security") || service.category.toLowerCase().includes("compliance")
    ? "shield"
    : service.category.toLowerCase().includes("strategy")
    ? "strategy"
    : service.category.toLowerCase().includes("digital") || service.category.toLowerCase().includes("engineering")
    ? "studio"
    : "modern");

  const heroTheme = heroThemes[variant] ?? heroThemes.modern;

  const availableSecondaryVideos = secondaryVideos.filter((item) => item !== service.heroVideo);
  const selectedSecondaryVideo = service.secondaryVideo ?? availableSecondaryVideos[
    getDeterministicIndex(service.slug + service.title, availableSecondaryVideos.length)
  ];

  const serviceCaseStudyImages = getCaseStudyImagesForService(service.slug);
  const displayedCaseStudies = service.caseStudies.map((caseStudy, index) => ({
    ...caseStudy,
    image: serviceCaseStudyImages[index % serviceCaseStudyImages.length],
  }));

  // Ensure industry grid has enough items to fill layout — synthesize from defaults when needed
  const defaultIndustries = [
    { name: "Government", description: "Public sector digital transformation and citizen services.", image: "/GOVERNMENT.webp" },
    { name: "Education", description: "Learning platforms and student experience improvements.", image: "/EDUCATION.png" },
    { name: "Energy & Utilities", description: "Operational optimization and grid reliability solutions.", image: "/ENERGY.webp" },
    { name: "Logistics", description: "Supply chain visibility and automation for efficient fulfillment.", image: "/Logistics.jpeg" },
    { name: "Manufacturing", description: "Modernizing operations with automation, predictive analytics, and smart factory solutions.", image: "/MANUFACTURING.webp" },
    { name: "Healthcare & Life Sciences", description: "Transforming patient outcomes with connected care, data insights, and digital health solutions.", image: "/aiinhealthcare.webp" },
    { name: "Retail & Consumer Goods", description: "Delivering omnichannel commerce, customer loyalty, and intelligent inventory management.", image: "/RETAIL.webp" },
    { name: "Financial Services", description: "Modernizing banking, insurance, and payments with secure, compliant digital platforms.", image: "/FINANCE.jpg" },
  ];

  const minIndustries = 8;
  const displayIndustries = [...service.industries];
  for (const def of defaultIndustries) {
    if (displayIndustries.length >= minIndustries) break;
    if (!displayIndustries.find((i) => i.name === def.name)) displayIndustries.push(def as any);
  }

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <section className={`relative overflow-hidden ${heroTheme.sectionClass}`}>
        <div className="absolute inset-0">
          {service.heroVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={service.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              poster={service.heroImage}
            />
          ) : (
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className={`absolute inset-0 ${heroTheme.overlayClass}`} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className={`grid gap-12 items-center ${heroTheme.gridClass}`}>
            <div className={`space-y-8 ${heroTheme.contentClass}`}>
              <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] ${heroTheme.badgeClass}`}>
                {service.category}
              </span>
              <div className="space-y-6 max-w-3xl">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${heroTheme.titleClass}`}>
                  {service.title}
                </h1>
                <p className={`text-lg leading-8 ${heroTheme.introClass}`}>
                  {service.heroDescription}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href={service.ctaLink}
                  className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold shadow-lg shadow-slate-950/20 transition ${heroTheme.buttonPrimary}`}
                >
                  {service.heroCta}
                </Link>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold transition ${heroTheme.buttonSecondary}`}
                >
                  Contact an Advisor
                </Link>
              </div>

              <p className={`max-w-2xl text-sm ${heroTheme.introClass}`}>
                {service.heroSubtext}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.bullets.map((item) => (
                  <div key={item} className={`rounded-3xl border p-6 shadow-sm ${heroTheme.cardClass}`}>
                    <p className={`text-sm font-semibold ${heroTheme.titleClass}`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] p-4 shadow-xl ${heroTheme.cardClass}`}>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-inner shadow-slate-900/10">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={1200}
                  height={760}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6">
                  <div className="rounded-3xl bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96 overflow-auto">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Key outcomes</p>
                    <div className="mt-3 grid gap-3">
                      {service.highlights && service.highlights.slice(0, 3).map((h) => (
                        <div key={h.title}>
                          <p className="text-sm font-semibold text-white">{h.title}</p>
                          <p className="mt-1 text-sm text-slate-200 leading-5 line-clamp-3">{h.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent case removed per request */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.26em] text-emerald-500">What makes this service unique</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-950">
                A tailored narrative for {service.title}
              </h2>
              <div className="space-y-5 text-base leading-8 text-slate-600">
                {service.overview.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-950 shadow-xl">
                <video
                  className="h-full w-full object-cover"
                  src={selectedSecondaryVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={service.heroImage}
                />
                <div className="p-8 bg-slate-950">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Visual story</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Dynamic outcomes in motion</h3>
                  <p className="mt-3 text-slate-300 leading-7">
                    Experience how our delivery model combines real-world expertise, automation, and design to make your technology strategy come alive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.95fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.26em] text-emerald-300">Why this matters</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                A service designed to solve modern enterprise challenges with confidence.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                Every engagement combines deep domain expertise, secure architecture, and an outcome-first delivery model so you can move faster while staying resilient.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-[1.75rem] bg-white/5 p-6 shadow-lg shadow-slate-950/20 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">{highlight.title}</p>
                  <p className="mt-4 text-base leading-7 text-slate-100">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] bg-white/5 p-8 text-center border border-white/10 shadow-sm">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Industry focus</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">Industries we empower</h2>
              <p className="max-w-3xl text-slate-600 leading-8">
                From regulated finance and healthcare to retail and manufacturing, our services are tailored for the specific requirements of your business sector.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {displayIndustries.map((industry) => (
                <div key={industry.name} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image src={industry.image} alt={industry.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute left-4 bottom-4">
                      <p className="inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-sm font-semibold text-white">
                        {industry.name}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-emerald-600">Industry</p>
                    <p className="mt-4 text-base leading-7 text-slate-700 line-clamp-3">{industry.description}</p>
                    <div className="mt-4">
                      <Link href={`/service?industry=${encodeURIComponent(industry.name)}`} className="text-sm font-semibold text-emerald-600 hover:underline">
                        Explore solutions →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Success stories</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">Case studies that show measurable value.</h2>
              <p className="mt-4 text-slate-400 leading-7">
                See how our teams turn complex challenges into reliable, repeatable outcomes for clients across industries.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Discuss your project
            </Link>
          </div>

          <CaseStudyCarousel caseStudies={displayedCaseStudies} serviceTitle={service.title} />
        </div>
      </section>

      <section className="relative bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                {service.ctaHeading}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{service.ctaHeading}</h2>
              <p className="max-w-3xl text-slate-300 leading-8">{service.closing}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={service.ctaLink}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Start your engagement
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore more services
                </Link>
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-slate-900/90 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">Looking for a tailored program?</p>
              <p className="mt-4 text-lg font-semibold text-white">Let's review your current priorities and recommend the right service path.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
