"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function QuickHireNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href={'/'}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Image src={logo} width={1000} height={1000} alt="logo image" />
            </div>
            <span className="text-2xl font-bold text-[#25324B] tracking-tight">QuickHire</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a href="#" className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 transition-colors">
              Find Jobs
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 transition-colors">
              Browse Companies
            </a>
          </li>
          <li>
            <Link href="/admin/dashboard" className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="cursor-pointer text-[16px] font-bold text-[#4640DE] hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors">
            Login
          </button>
          <button className="text-[16px] cursor-pointer font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded transition-colors shadow-sm">
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1 bg-white">
          <a
            href="#"
            className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 hover:bg-indigo-50 transition-colors py-3 px-2 rounded-lg border-b border-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 hover:bg-indigo-50 transition-colors py-3 px-2 rounded-lg border-b border-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Browse Companies
          </a>
          <Link
            href="/admin/dashboard"
            className="text-sm font-medium text-[#515B6F] hover:text-indigo-600 hover:bg-indigo-50 transition-colors py-3 px-2 rounded-lg border-b border-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <button className="w-full text-[15px] font-bold text-[#4640DE] border border-indigo-200 hover:bg-indigo-50 px-4 py-2.5 rounded-lg transition-colors">
              Login
            </button>
            <button className="w-full text-[15px] font-bold text-white bg-[#4640DE] hover:bg-indigo-700 px-5 py-2.5 rounded-lg transition-colors shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}