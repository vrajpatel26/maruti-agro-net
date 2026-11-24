
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
    {
        percentage: "35%",
        title: "35% Shade Net",
        description: "Available in 35% shade density for varied customer requirements.",
        image: "/images/products/shade-net-35.webp",
        href: "/products/35-shade-net",
    },
    {
        percentage: "50%",
        title: "50% Shade Net",
        description: "Manufactured with 50% shade density and multiple colour options.",
        image: "/images/products/shade-net-50.webp",
        href: "/products/50-shade-net",
    },
    {
        percentage: "75%",
        title: "75% Shade Net",
        description: "A 75% shade density option for different customer requirements.",
        image: "/images/products/shade-net-75.webp",
        href: "/products/75-shade-net",
    },
    {
        percentage: "90%",
        title: "90% Shade Net",
        description: "Available in 90% shade density and multiple colour options.",
        image: "/images/products/shade-net-90.webp",
        href: "/products/90-shade-net",
    },
];

const colours = [
    { name: "Green", value: "#25833c" },
    { name: "Beige", value: "#d7c29a" },
    { name: "Black", value: "#171717" },
    { name: "White", value: "#ffffff", border: true },
];

export default function ProductCategories() {
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
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

                {/* Section Heading */}
                <div
                    className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                >
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                        <span className="h-[2px] w-8 bg-green-600" />
                        Our Products
                        <span className="h-[2px] w-8 bg-green-600" />
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Shade Nets for
                        <span className="block text-green-700">
                            Different Requirements
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-600">
                        Explore our range of Tape x Tape shade nets, available in
                        four different shade densities and multiple colour options.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <Link
                            href={product.href}
                            key={product.percentage}
                            className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-12 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            {/* Product Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={`${product.title} - Maruti Agro Net Industries`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-green-700 shadow-sm">
                                    {product.percentage} Density
                                </span>

                                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-green-700">
                                    {product.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {product.description}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-green-700">
                                    Explore Product
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Available Colours */}
                <div
                    className={`mt-16 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all delay-300 duration-1000 sm:p-10 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                                Colour Options
                            </span>

                            <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                                Available in Multiple Colours
                            </h3>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                                All four shade densities are available in our standard
                                colour options, with custom colours also available.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            {colours.map((colour) => (
                                <div
                                    key={colour.name}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <span
                                        className={`h-10 w-10 rounded-full shadow-sm ${colour.border ? "border border-gray-300" : ""
                                            }`}
                                        style={{ backgroundColor: colour.value }}
                                    />
                                    <span className="text-xs font-medium text-gray-600">
                                        {colour.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-6">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                        <p className="text-sm font-medium text-gray-700">
                            Custom colour options are also available on request.
                        </p>
                    </div>
                </div>

                {/* View All Products */}
                <div className="mt-12 text-center">
                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
                    >
                        View All Products
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
