"use client"
import Image from 'next/image';
import { useState } from 'react';
import bgskalaton from '../../../public/images/Pattern.png'
import profile from '../../../public/images/heroImg.png'
import underLine from "../../../public/images/underline.png"

const popular = ["UI Designer", "UX Researcher", "Android", "Admin"];

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("Florence, Italy");

    return (
        <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
            <div
                className="hidden lg:block absolute right-0 top-0 h-full w-[52%] "
            />
            {/* Decorative grid squares */}
            <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <Image src={bgskalaton} width={1000} height={1000} alt='skalaton' className=''></Image>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center justify-between lg:py-0">
                <div className="max-w-xl">
                    <h1 className="text-6xl sm:text-5xl lg:text-[72px] font-extrabold leading-tight text-[#25324B] tracking-tight">
                        Discover<br />more than
                        <br />
                        <span className="relative inline-block text-[#26A4FF]">
                            5000+ Jobs
                            {/* Animated underline using inline style since Tailwind can't do scaleX keyframes easily */}
                            <Image src={underLine} width={1000} height={1000} alt='underline'></Image>
                        </span>
                    </h1>

                    <p className="mt-6 text-[20px] text-[#515B6F] leading-relaxed max-w-lg">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    {/* Search bar — desktop/tablet horizontal */}
                    <div className="hidden sm:flex mt-9 items-center bg-white rounded-2xl shadow-[0_4px_24px_rgba(79,70,229,0.1)] border border-indigo-100 overflow-hidden">
                        <div className="flex items-center gap-2 flex-1 px-4 border-r border-indigo-100">
                            <svg className="w-[18px] h-[18px] text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Job title or keyword"
                                className="w-full py-[14px] text-sm text-gray-700 placeholder-gray-300 outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex items-center gap-2 px-4 border-r border-indigo-100 shrink-0">
                            <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <select
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                className="py-[14px] text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                            >
                                <option>Florence, Italy</option>
                                <option>Milan, Italy</option>
                                <option>Rome, Italy</option>
                                <option>Remote</option>
                            </select>
                        </div>
                        <button className="bg-[#4640DE] cursor-pointer hover:bg-indigo-700 text-white text-sm font-semibold px-7 py-[14px] transition-colors whitespace-nowrap">
                            Search my job
                        </button>
                    </div>

                    {/* Search bar — mobile stacked */}
                    <div className="flex sm:hidden flex-col mt-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(79,70,229,0.1)] border border-indigo-100 overflow-hidden">
                        <div className="flex items-center gap-3 px-4 border-b border-indigo-100">
                            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Job title or keyword"
                                className="w-full py-4 text-sm text-gray-700 placeholder-gray-300 outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex items-center gap-3 px-4 border-b border-indigo-100">
                            <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <select
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                className="w-full py-4 text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                            >
                                <option>Florence, Italy</option>
                                <option>Milan, Italy</option>
                                <option>Rome, Italy</option>
                                <option>Remote</option>
                            </select>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-4 transition-colors">
                            Search my job
                        </button>
                    </div>

                    {/* Popular tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        <span className="text-[16px] text-[#202430] font-medium">Popular :</span>
                        {popular.map(tag => (
                            <a
                                key={tag}
                                href="#"
                                className="text-[16px] font-medium "
                            >
                                {tag},
                            </a>
                        ))}
                    </div>
                </div>
                {/* ── RIGHT: Banner image + floating cards ── */}
                <div className="hidden lg:flex relative justify-center items-end">
                    <div className="relative z-20 w-full h-full flex items-end justify-center">
                        <Image
                            src={profile}
                            alt="Banner"
                            className="h-[800px] w-full object-contain drop-shadow-2xl absolute -top-90 -right-40"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;