
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const aboutLinks = [
  { label: "Company Overview", href: "/about-us" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality Assurance", href: "/quality" },
];

const productLinks = [
  { label: "All Products", href: "/products" },
  { label: "Agricultural Shade Nets", href: "/products/agricultural-shade-nets" },
  { label: "Greenhouse Shade Nets", href: "/products/greenhouse-shade-nets" },
  { label: "Construction Safety Nets", href: "/products/construction-safety-nets" },
];

const applicationLinks = [
  { label: "All Applications", href: "/applications" },
  { label: "Agriculture & Farming", href: "/applications/agriculture" },
  { label: "Greenhouses & Nurseries", href: "/applications/greenhouses" },
  { label: "Construction", href: "/applications/construction" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
    setMobileApplicationsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isAboutActive = ["/about-us", "/manufacturing", "/quality"].some(
    (path) => pathname.startsWith(path)
  );

  const desktopDropdown = (
    title: string,
    links: typeof aboutLinks,
    active: boolean
  ) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(title)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        type="button"
        onClick={() =>
          setActiveDropdown(activeDropdown === title ? null : title)
        }
        aria-expanded={activeDropdown === title}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 py-3 text-[15px] font-semibold transition-colors ${
          activeDropdown === title || active
            ? "text-[#398A42]"
            : "text-[#303A32] hover:text-[#398A42]"
        }`}
      >
        {title}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            activeDropdown === title ? "rotate-180" : ""
          }`}
        />
      </button>

      {activeDropdown === title && (
        <div className="absolute left-0 top-full z-50 w-72 pt-3">
          <div className="overflow-hidden rounded-xl border border-[#E7EDE6] bg-white p-2 shadow-[0_16px_45px_rgba(20,50,20,0.13)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-[#F1F7EF] text-[#398A42]"
                    : "text-[#38443A] hover:bg-[#F1F7EF] hover:text-[#398A42]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const mobileDropdown = (
    title: string,
    links: typeof aboutLinks,
    open: boolean,
    setOpen: (value: boolean) => void,
    active: boolean
  ) => (
    <div className="border-b border-[#EEF1EC]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between py-4 text-sm font-semibold ${
          active ? "text-[#398A42]" : "text-[#303A32]"
        }`}
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="space-y-1 pb-3 pl-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-3 text-sm transition-colors ${
                isActive(link.href)
                  ? "bg-[#F1F7EF] font-semibold text-[#398A42]"
                  : "text-[#647067] hover:bg-[#F1F7EF] hover:text-[#398A42]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E9EEE7] bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[88px] lg:px-10 xl:px-14">

        {/* Company Branding */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Maruti Agro Net Industries - Home"
        >
          <div className="relative h-[48px] w-[48px] shrink-0 sm:h-[58px] sm:w-[58px]">
            <Image
              src="/images/maruti-logo.png"
              alt="Maruti Agro Net Industries logo"
              fill
              priority
              sizes="58px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0">
            <span className="block whitespace-nowrap text-[14px] font-extrabold tracking-[-0.5px] text-[#263A2A] sm:text-[18px] lg:text-[19px]">
              MARUTI AGRO NET
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold tracking-[2.5px] text-[#679B45] sm:text-[11px]">
              INDUSTRIES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          <Link
            href="/"
            className={`text-[15px] font-semibold transition-colors ${
              isActive("/")
                ? "text-[#398A42]"
                : "text-[#303A32] hover:text-[#398A42]"
            }`}
          >
            Home
          </Link>

          {desktopDropdown("About Us", aboutLinks, isAboutActive)}

          {desktopDropdown(
            "Products",
            productLinks,
            isActive("/products")
          )}

          {desktopDropdown(
            "Applications",
            applicationLinks,
            isActive("/applications")
          )}

          <Link
            href="/contact-us"
            className={`text-[15px] font-semibold transition-colors ${
              isActive("/contact-us")
                ? "text-[#398A42]"
                : "text-[#303A32] hover:text-[#398A42]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact-us"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#286C35] px-5 py-3 text-[14px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D5429] hover:shadow-lg xl:flex"
        >
          Request a Quote
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E4EBE2] text-[#286C35] transition-colors hover:bg-[#F1F7EF] xl:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 max-h-[calc(100dvh-76px)] w-full overflow-y-auto border-t border-[#E9EEE7] bg-white shadow-xl xl:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1440px] flex-col px-5 py-5 sm:px-8"
          >
            <Link
              href="/"
              className={`border-b border-[#EEF1EC] py-4 text-sm font-semibold ${
                isActive("/") ? "text-[#398A42]" : "text-[#303A32]"
              }`}
            >
              Home
            </Link>

            {mobileDropdown(
              "About Us",
              aboutLinks,
              mobileAboutOpen,
              setMobileAboutOpen,
              isAboutActive
            )}

            {mobileDropdown(
              "Products",
              productLinks,
              mobileProductsOpen,
              setMobileProductsOpen,
              isActive("/products")
            )}

            {mobileDropdown(
              "Applications",
              applicationLinks,
              mobileApplicationsOpen,
              setMobileApplicationsOpen,
              isActive("/applications")
            )}

            <Link
              href="/contact-us"
              className={`border-b border-[#EEF1EC] py-4 text-sm font-semibold ${
                isActive("/contact-us")
                  ? "text-[#398A42]"
                  : "text-[#303A32]"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact-us"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#286C35] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#1D5429]"
            >
              Request a Quote
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
