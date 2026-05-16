"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BackgroundItem = { src: string; title?: string; content?: string };

interface HeroProps {
  backgroundData?: BackgroundItem[];
  backgroundDataLight?: BackgroundItem[];
  backgroundDataDark?: BackgroundItem[];
  mainTitle?: React.ReactNode;
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  overlayOpacity?: number;
  showWave?: boolean;
  intervalMs?: number;
}

const defaultBackgrounds: BackgroundItem[] = [
  {
    src: "/background1.jpg",
    title: "Enterprise-Ready Digital Engineering",
    content:
      "We partner with ambitious teams to design, build, and modernize software platforms that improve performance, reliability, and business outcomes."
  },
  {
    src: "/background2.jpg",
    title: "Reliable Delivery at Scale",
    content:
      "From product strategy to deployment, our delivery model helps organizations reduce time to market while maintaining quality, security, and operational efficiency."
  },
  {
    src: "/background3.jpg",
    title: "Long-Term Technology Partnership",
    content:
      "Our cross-functional teams combine engineering expertise and domain insight to support continuous innovation, modernization, and measurable growth."
  }
];

const HeroSection: React.FC<HeroProps> = ({
  backgroundData = defaultBackgrounds,
  backgroundDataLight,
  backgroundDataDark,
  mainTitle,
  eyebrow = "Trusted Technology Partner",
  description,
  primaryCta,
  secondaryCta,
  overlayOpacity = 0.5,
  showWave = true,
  intervalMs = 6000,
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const activeBackgrounds = isDark
    ? backgroundDataDark ?? backgroundData
    : backgroundDataLight ?? backgroundData;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeBackgrounds.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [activeBackgrounds.length, intervalMs]);

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      {/* Background Image Transition */}
      <div className="absolute inset-0">
        {activeBackgrounds.map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
      </div>

      {/* Dark Overlay (controlled by prop) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity ?? 0.5})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row h-screen w-full items-end md:items-center pb-20 px-6 md:px-20 text-center md:text-left">
        {/* Left Side: Heading (Positioned Lower on Mobile) */}
        <div className="max-w-xl mb-6 md:mb-10 pt-16 sm:pt-20 md:pt-0">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-200 mb-3">{eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {mainTitle ?? (
              <>
                Build Secure, Scalable Digital Products
                <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  for Modern Enterprises
                </span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-5 text-sm sm:text-base text-white font-semibold max-w-lg">{description}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {primaryCta ? (
              primaryCta.onClick ? (
                <button onClick={primaryCta.onClick} className="px-5 py-3 rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
                  {primaryCta.label}
                </button>
              ) : (
                <Link href={primaryCta.href || "/contact"} className="px-5 py-3 rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
                  {primaryCta.label}
                </Link>
              )
            ) : (
              <Link href="/contact" className="px-5 py-3 rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
                Talk to an Expert
              </Link>
            )}

            {secondaryCta ? (
              secondaryCta.onClick ? (
                <button onClick={secondaryCta.onClick} className="px-5 py-3 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition">
                  {secondaryCta.label}
                </button>
              ) : (
                <Link href={secondaryCta.href || "/service"} className="px-5 py-3 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition">
                  {secondaryCta.label}
                </Link>
              )
            ) : (
              <Link href="/service" className="px-5 py-3 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition">
                Explore Services
              </Link>
            )}
          </div>
        </div>

        {/* Middle Partition Line (Hidden on Small Screens) */}
        <div className="hidden md:block h-40 w-[5px] bg-blue-300 bg-opacity-50 mx-6 rounded-full"></div>

        {/* Right Side: Dynamic Description */}
        <div className="max-w-sm flex flex-col space-y-3 p-4 bg-black/25 rounded-xl border border-white/15 backdrop-blur-[2px]">
          <h2 className="text-lg md:text-xl font-semibold text-white">{activeBackgrounds[currentIndex % activeBackgrounds.length]?.title}</h2>
          <p className="text-sm md:text-base text-white font-semibold">{activeBackgrounds[currentIndex % activeBackgrounds.length]?.content}</p>
          <Link href="/Learnmore" className="text-emerald-300 font-semibold hover:underline">Learn more about our approach →</Link>
        </div>
      </div>

      {showWave && (
        <>
          {/* Wave Animation */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[100px] md:h-[120px]">
            <div
              className="absolute bottom-0 left-0 w-[200%] h-full bg-bottom bg-repeat-x"
              style={{
                backgroundImage: "url('/wave.png')",
                backgroundSize: "contain",
                animation: "waveMove 8s linear infinite",
              }}
            ></div>

            <div
              className="absolute bottom-0 left-0 w-[200%] h-full opacity-40 bg-bottom bg-repeat-x"
              style={{
                backgroundImage: "url('/wave.png')",
                backgroundSize: "contain",
                animation: "waveMove 6s linear infinite reverse",
              }}
            ></div>

            <div
              className="absolute bottom-0 left-0 w-[200%] h-full opacity-70 bg-bottom bg-repeat-x"
              style={{
                backgroundImage: "url('/wave.png')",
                backgroundSize: "contain",
                animation: "waveMove 4s linear infinite",
              }}
            ></div>
          </div>

          <style jsx>{`
            @keyframes waveMove {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </>
      )}
    </section>
  );
};

export default HeroSection;
