
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Store,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const companyStats = [
  {
    value: "2022",
    label: "Established",
    icon: CalendarDays,
  },
  {
    value: "₹25 Cr+",
    label: "Total Sales",
    icon: TrendingUp,
  },
  {
    value: "40+",
    label: "Team Members",
    icon: Users,
  },
  {
    value: "50+",
    label: "Traders Network",
    icon: Store,
  },
];

const features = [
  "Tape x Tape shade net manufacturing",
  "Multiple shade net colour options",
  "Production machinery and manufacturing capabilities",
];

const colours = [
  { name: "Green", color: "#25833c" },
  { name: "Black", color: "#171717" },
  { name: "Beige", color: "#d7c29a" },
  { name: "White", color: "#f5f5f5" },
];

export default function CompanyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Main Introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Factory Image */}
          <div
            className={`relative isolate transition-all duration-1000 ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
              }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <Image
                src="/images/machinery/machine-2.png"
                alt="Shade net manufacturing machinery at Maruti Agro Net Industries"
                fill
                priority={false}
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-lg font-semibold text-white">
                  Maruti Agro Net Industries
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Shade Net Manufacturing
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 -z-10 h-40 w-40 rounded-2xl bg-green-100 sm:-right-6" />
          </div>

          {/* Company Content */}
          <div
            className={`transition-all delay-200 duration-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
              }`}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              <span className="h-[2px] w-8 bg-green-600" />
              About Our Company
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Building Better Shade
              <span className="block text-green-700">
                Solutions Since 2022
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Founded in 2022, Maruti Agro Net Industries manufactures
              Tape x Tape shade nets for agricultural and other applications.
              We focus on delivering shade net solutions that meet the
              varied requirements of our customers.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Colour Options */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-bold text-gray-900">
                Available Shade Net Colours
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {colours.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span
                      className="h-5 w-5 rounded-full border border-gray-300"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">
                      {item.name}
                    </span>
                  </div>
                ))}

                <span className="text-sm font-medium text-green-700">
                  + Custom Colours
                </span>
              </div>
            </div>

            <Link
              href="/about-us"
              className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
            >
              Discover Our Company
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Company Statistics */}
        <div
          className={`mt-24 grid grid-cols-2 gap-4 transition-all delay-300 duration-1000 sm:grid-cols-4 sm:gap-6 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
            }`}
        >
          {companyStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:bg-green-50 hover:shadow-lg sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
