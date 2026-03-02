"use client";

import { useState } from "react";

const tagColors: Record<string, string> = {
    "Full-Time": "bg-green-100 text-green-600",
    Marketing: "bg-orange-100 text-orange-500",
    Design: "bg-indigo-100 text-indigo-600",
    Engineering: "bg-blue-100 text-blue-600",
    Business: "bg-purple-100 text-purple-600",
};

const jobs = [
    {
        id: 1,
        title: "Social Media Assistant",
        company: "Nomad",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">N</div>
        ),
    },
    {
        id: 2,
        title: "Social Media Assistant",
        company: "Netlify",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
        ),
    },
    {
        id: 3,
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Francisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M12 2L6 6.5l6 4.5 6-4.5L12 2zM6 13.5L12 18l6-4.5-6-4.5-6 4.5zM18 6.5L12 11l6 4.5 6-4.5-6-4.5zM0 11l6 4.5L12 11 6 6.5 0 11z" /></svg>
            </div>
        ),
    },
    {
        id: 4,
        title: "Brand Designer",
        company: "Maze",
        location: "San Francisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
            </div>
        ),
    },
    {
        id: 5,
        title: "Interactive Developer",
        company: "Terraform",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm13 2v6l5-3z" /></svg>
            </div>
        ),
    },
    {
        id: 6,
        title: "Interactive Developer",
        company: "Udacity",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-sm">U</div>
        ),
    },
    {
        id: 7,
        title: "HR Manager",
        company: "Packer",
        location: "Lucern, Switzerland",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.55 15.86.5 13.5.5c-1.3 0-2.4.56-3.18 1.44L9 3.5l-1.32-1.56C6.9 1.06 5.8.5 4.5.5 2.14.5 0 2.55 0 4.67c0 .45.11.89.18 1.33H0v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" /></svg>
            </div>
        ),
    },
    {
        id: 8,
        title: "HR Manager",
        company: "Webflow",
        location: "Lucern, Switzerland",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: (
            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">W</div>
        ),
    },
];

export default function LatestJobsOpen() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-[48px] font-extrabold text-gray-900">
                    Latest <span className="text-[#26A4FF]">jobs open</span>
                </h2>
                <a href="#" className="hidden sm:flex items-center gap-1 text-indigo-500 font-semibold text-sm hover:gap-2 transition-all duration-200">
                    Show all jobs
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* ── MOBILE: vertical single column ── */}
            <div className="flex flex-col gap-3 sm:hidden">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
                    >
                        {job.logo}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                                {job.company} <span className="mx-1">·</span> {job.location}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {job.tags.map((tag) => (
                                    <span key={tag} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[tag] ?? "bg-gray-100 text-gray-500"}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Show all jobs — mobile */}
                <a href="#" className="flex items-center gap-1 text-indigo-500 font-semibold text-sm mt-2">
                    Show all jobs
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* ── DESKTOP: 2-column grid ── */}
            <div className="hidden sm:grid grid-cols-2 gap-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        onMouseEnter={() => setHoveredId(job.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`flex items-start gap-4 p-5 bg-white border rounded-xl cursor-pointer transition-all duration-200 ${hoveredId === job.id
                            ? "border-indigo-300 shadow-lg shadow-indigo-50"
                            : "border-gray-200 shadow-sm"
                            }`}
                    >
                        {/* Logo */}
                        {job.logo}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-[#25324B] text-[20px]">{job.title}</h3>
                            <p className="text-[16px] text-[#515B6F] mt-0.5">
                                {job.company} <span className="mx-1">·</span> {job.location}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {job.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-[14px] font-semibold px-3 py-1 rounded-full border ${tag === "Full-Time"
                                            ? "border-green-300 text-green-600 bg-transparent"
                                            : tagColors[tag] ?? "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}