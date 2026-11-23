
import Link from "next/link";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#10251b] sm:min-h-[740px] lg:min-h-[820px]">

      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-farm.png')",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071b12]/95 via-[#071b12]/70 to-[#071b12]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071b12]/70 via-transparent to-black/10" />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-w-3xl">

          <div className="hero-reveal mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
              Maruti Agro Net Industries
            </span>
          </div>

          <h1 className="hero-reveal hero-delay-1 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Smarter Shade.
            <span className="mt-2 block text-green-400">
              Stronger Growth.
            </span>
          </h1>

          <p className="hero-reveal hero-delay-2 mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Explore shade net solutions for modern agriculture,
            greenhouses and a wide range of practical applications.
            Find the right solution for your requirements.
          </p>

          <div className="hero-reveal hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-green-600 px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-xl hover:shadow-green-900/30"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Explore Products
              <Play className="h-4 w-4" />
            </Link>
          </div>

          <div className="hero-reveal hero-delay-4 mt-16 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Discover Our Solutions
          </div>

        </div>
      </div>
    </section>
  );
}
