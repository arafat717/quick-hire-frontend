"use client";

import { useState } from "react";

const categories = [
    {
        id: 1,
        name: "Design",
        jobs: 235,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <path d="M12 20h9" strokeLinecap="round" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 5l3 3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Sales",
        jobs: 756,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
                <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
                <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
                <circle cx="18" cy="8" r="2" fill="currentColor" strokeWidth={0} />
                <circle cx="12" cy="2" r="2" fill="currentColor" strokeWidth={0} />
                <circle cx="6" cy="12" r="2" fill="currentColor" strokeWidth={0} />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Marketing",
        jobs: 140,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <path d="M3 11l19-9-9 19-2-8-8-2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 4,
        name: "Finance",
        jobs: 325,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M2 10h20" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 5,
        name: "Technology",
        jobs: 436,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 6,
        name: "Engineering",
        jobs: 542,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 7,
        name: "Business",
        jobs: 211,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 8,
        name: "Human Resource",
        jobs: 346,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
            </svg>
        ),
    },
];

const ArrowIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function ExploreByCategory() {
    const [activeId, setActiveId] = useState<number | null>(3);

    return (
        <section className="w-full max-w-7xl mx-auto px-2 sm:px-2 py-8 sm:py-12 my-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-[48px] font-extrabold text-gray-900">
                    Explore by <span className="text-[#26A4FF]">category</span>
                </h2>
                <a href="#" className="flex items-center gap-1 text-indigo-500 font-semibold text-sm hover:gap-2 transition-all duration-200">
                    Show all jobs
                    <ArrowIcon className="w-4 h-4" />
                </a>
            </div>

            {/* Mobile: vertical list */}
            <div className="flex flex-col gap-3 sm:hidden">
                {categories.map((cat) => {
                    const isActive = cat.id === activeId;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveId(isActive ? null : cat.id)}
                            className={`flex items-center justify-between w-full px-4 py-4 rounded-xl border transition-all duration-200 text-left
                ${isActive
                                    ? "bg-[#4640DE] border-indigo-600"
                                    : "bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                                }`}
                        >
                            <div className="flex items-center gap-4 group-hover:text-white">
                                <span className={isActive ? "text-white" : "text-indigo-500"}>
                                    {cat.icon}
                                </span>
                                <div>
                                    <p className={`font-bold text-sm group-hover:text-white ${isActive ? "text-white" : "text-gray-900"}`}>
                                        {cat.name}
                                    </p>
                                    <p className={`text-xs mt-0.5 group-hover:text-white ${isActive ? "text-indigo-200" : "text-gray-500"}`}>
                                        {cat.jobs} jobs available
                                    </p>
                                </div>
                            </div>
                            <ArrowIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-gray-400"}`} />
                        </button>
                    );
                })}
            </div>

            {/* Desktop: 4-column grid */}
            <div className="hidden sm:grid grid-cols-4 gap-5 overflow-hidden divide-x divide-y divide-gray-200">
                {categories.map((cat) => {
                    const isActive = cat.id === activeId;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveId(isActive ? null : cat.id)}
                            className={`group border border-[#D6DDEB] flex flex-col gap-3 p-6 text-left transition-all duration-300
                ${isActive
                                    ? "bg-indigo-600"
                                    : "bg-white hover:bg-indigo-600 hover:text-white"
                                }`}
                        >
                            <span className={`transition-colors duration-300 ${isActive ? "text-white" : "text-indigo-500 group-hover:text-white"}`}>
                                {cat.icon}
                            </span>
                            <div>
                                <p className={`font-bold text-base leading-tight group-hover:text-white ${isActive ? "text-white" : "text-gray-900"}`}>
                                    {cat.name}
                                </p>
                                <div className={`flex items-center group-hover:text-white gap-1 mt-1 text-sm font-medium ${isActive ? "text-indigo-200" : "text-gray-500"}`}>
                                    {cat.jobs} jobs available
                                    <ArrowIcon className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}