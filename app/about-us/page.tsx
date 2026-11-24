
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Target,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
  HeartHandshake,
  Leaf,
  Building2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-1000 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    description:
      "We aim to maintain consistent product quality through responsible manufacturing practices and attention to customer requirements.",
  },
  {
    icon: Handshake,
    title: "Trust & Relationships",
    description:
      "We value lasting relationships built on transparency, reliability and mutual respect with our customers and business partners.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    description:
      "We believe in improving our capabilities, strengthening our processes and adapting to the changing needs of the industry.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description:
      "We strive to understand different customer requirements and provide suitable shade net solutions.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We recognize the contribution of our people and believe that collaboration is essential for sustainable growth.",
  },
  {
    icon: Leaf,
    title: "Responsible Growth",
    description:
      "We aim to grow our business through thoughtful decisions, dependable practices and long-term relationships.",
  },
];

const leaders = [
  {
    name: "Vasant Patel",
    role: "Founder",
    image: "/images/leadership/vasant-patel-founder.webp",
    
    description:
      "Leading the company's journey with a focus on business development and long-term growth.",
  },
  {
    name: "Saurabh Patel",
    role: "Co-Founder",
    // image: "/images/leadership/saurabh-patel-co-founder.webp",
    image: "/images/leadership/saurabh.jpeg",

    description:
      "Contributing to the company's growth and its continued development.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* PAGE HERO */}
      <section className="relative flex min-h-[480px] items-center bg-[#10251b] sm:min-h-[560px] lg:min-h-[620px]">

        <Image
          src="/images/machinery/machine-2.png"
          alt="Maruti Agro Net Industries"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071b12]/95 via-[#071b12]/75 to-[#071b12]/35" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              <span className="h-[2px] w-8 bg-green-400" />
              Who We Are
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              About
              <span className="block text-green-400">
                Maruti Agro Net
              </span>
              <span className="block">Industries</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Discover our journey, the people behind our company
              and the values that guide our approach to shade net
              manufacturing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              A Journey Built on
              <span className="block text-green-700">
                Purpose and Progress
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              Maruti Agro Net Industries was established in 2022
              with a focus on shade net manufacturing. Since its
              beginning, the company has worked towards developing
              its manufacturing capabilities and building strong
              business relationships.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our journey reflects a commitment to understanding
              the needs of the market, serving customers and
              strengthening our presence in the shade net industry.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We believe that sustainable business growth comes
              from dependable products, dedicated people and
              long-term relationships.
            </p>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/machinery/machine-2.png"
                alt="Maruti Agro Net Industries manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-7 -left-3 rounded-2xl bg-green-700 p-6 text-white shadow-xl sm:-left-7">
              <p className="text-3xl font-bold">2022</p>
              <p className="mt-1 text-sm text-white/80">
                Our Beginning
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR BUSINESS */}
      <section className="bg-[#f5f8f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

          <Reveal className="order-2 lg:order-1">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Building2 className="h-7 w-7" />
            </div>

            <span className="mt-7 block text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our Business
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Focused on Shade Net
              <span className="block text-green-700">
                Manufacturing
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Maruti Agro Net Industries specializes in Tape x Tape
              shade net manufacturing. Our business is centered
              around producing shade net solutions for customers
              with different requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We focus on developing our manufacturing operations,
              understanding market needs and building dependable
              business relationships with traders and customers.
            </p>

            <Link
              href="/manufacturing"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-green-700 transition-colors hover:text-green-900"
            >
              Explore Our Manufacturing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/machinery/machine-2.png"
                alt="Shade net production"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our Purpose
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              What Guides Our Journey
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our vision and mission reflect the direction we want
              to take and the principles that guide our work.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            {/* Vision */}
            <Reveal>
              <div className="h-full rounded-3xl border border-gray-100 bg-[#f5f8f5] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Eye className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Our Vision
                </h3>

                <p className="mt-5 text-lg font-semibold leading-8 text-green-800">
                  To become a trusted and recognized name in the
                  shade net manufacturing industry.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  We aim to grow through reliable manufacturing,
                  consistent product quality and customer-focused
                  solutions while building strong relationships
                  and expanding our market presence.
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={150}>
              <div className="h-full rounded-3xl border border-gray-100 bg-[#10251b] p-8 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-white">
                  <Target className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold sm:text-3xl">
                  Our Mission
                </h3>

                <p className="mt-5 text-lg font-semibold leading-8 text-green-400">
                  To manufacture dependable shade net solutions
                  that meet the diverse requirements of our customers.
                </p>

                <p className="mt-5 leading-8 text-white/70">
                  We are committed to responsible manufacturing,
                  consistent quality, customer satisfaction and
                  continuous improvement in our capabilities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#f5f8f5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              What We Believe In
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The principles that shape our decisions, relationships
              and approach to business.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={(index % 3) * 100}>
                  <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl sm:p-9">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              The People Behind Our Company
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Meet Our Leadership
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Meet the people leading the journey of Maruti Agro
              Net Industries.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 150}>
                <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[4/4.2] overflow-hidden bg-gray-100">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 text-center sm:p-9">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {leader.name}
                    </h3>

                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                      {leader.role}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16">
        <Reveal>
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-green-700 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-100">
                Let's Connect
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Let's Build a Stronger Business Relationship
              </h2>

              <p className="mt-5 leading-8 text-white/80">
                Get in touch with Maruti Agro Net Industries
                to discuss your business requirements.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-bold text-green-800 transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
