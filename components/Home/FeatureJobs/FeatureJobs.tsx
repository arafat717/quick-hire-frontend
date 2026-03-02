"use client";

import { useState } from "react";

const tagColors: Record<string, string> = {
    Marketing: "bg-orange-100 text-orange-500",
    Design: "bg-teal-100 text-teal-600",
    Business: "bg-purple-100 text-purple-600",
    Technology: "bg-red-100 text-red-400",
    Engineering: "bg-blue-100 text-blue-600",
};

const jobs = [
    {
        id: 1,
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        type: "Full Time",
        description: "Revolut is looking for Email Marketing to help team ma ...",
        tags: ["Marketing", "Design"],
        logo: (
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-black text-lg">R</div>
        ),
    },
    {
        id: 2,
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Francisco, US",
        type: "Full Time",
        description: "Dropbox is looking for Brand Designer to help the team t ...",
        tags: ["Design", "Business"],
        logo: (
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 2L6 6.5l6 4.5 6-4.5L12 2zM6 13.5L12 18l6-4.5-6-4.5-6 4.5zM18 6.5L12 11l6 4.5 6-4.5-6-4.5zM0 11l6 4.5L12 11 6 6.5 0 11z" /></svg>
            </div>
        ),
    },
    {
        id: 3,
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        type: "Full Time",
        description: "Pitch is looking for Customer Manager to join marketing t ...",
        tags: ["Marketing"],
        logo: (
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">P</div>
        ),
    },
    {
        id: 4,
        title: "Visual Designer",
        company: "Blinklist",
        location: "Granada, Spain",
        type: "Full Time",
        description: "Blinkist is looking for Visual Designer to help team desi ...",
        tags: ["Design"],
        logo: (
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                </div>
            </div>
        ),
    },
    {
        id: 5,
        title: "Product Designer",
        company: "ClassPass",
        location: "Manchester, UK",
        type: "Full Time",
        description: "ClassPass is looking for Product Designer to help us...",
        tags: ["Marketing", "Design"],
        logo: (
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">C</div>
        ),
    },
    {
        id: 6,
        title: "Lead Designer",
        company: "Canva",
        location: "Ontario, Canada",
        type: "Full Time",
        description: "Canva is looking for Lead Engineer to help develop n ...",
        tags: ["Design", "Business"],
        logo: (
            <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-sm">Ca</div>
        ),
    },
    {
        id: 7,
        title: "Brand Strategist",
        company: "GoDaddy",
        location: "Marseille, France",
        type: "Full Time",
        description: "GoDaddy is looking for Brand Strategist to join the team...",
        tags: ["Marketing"],
        logo: (
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">G</div>
        ),
    },
    {
        id: 8,
        title: "Data Analyst",
        company: "Twitter",
        location: "San Diego, US",
        type: "Full Time",
        description: "Twitter is looking for Data Analyst to help team desi ...",
        tags: ["Technology"],
        logo: (
            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
            </div>
        ),
    },
];

function JobCard({ job, hovered, onEnter, onLeave }: {
    job: typeof jobs[0];
    hovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    return (
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`flex flex-col gap-3 p-5 bg-white border rounded cursor-pointer transition-all duration-200 ${hovered ? "border-indigo-300 shadow-lg shadow-indigo-50" : "border-gray-200 shadow-sm"
                }`}
        >
            {/* Logo + Badge */}
            <div className="flex items-start justify-between">
                {job.logo}
                <span className="text-xs font-semibold text-gray-600 border border-gray-200 rounded px-2 py-1 whitespace-nowrap">
                    {job.type}
                </span>
            </div>

            {/* Title + Company */}
            <div>
                <h3 className="font-bold text-[#25324B] text-[18px]">{job.title}</h3>
                <p className="text-[16px] text-[#7C8493] mt-0.5">
                    {job.company} <span className="mx-1">·</span> {job.location}
                </p>
            </div>

            {/* Description */}
            <p className="text-[16px] text-[#7C8493] leading-relaxed">{job.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {job.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`text-[14px] font-semibold px-3 py-1 rounded-full ${tagColors[tag] ?? "bg-gray-100 text-gray-500"}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function FeaturedJobs() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 font-sans">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-[48px] font-extrabold text-gray-900">
                    Featured <span className="text-[#26A4FF]">jobs</span>
                </h2>
                {/* Show all jobs — desktop only in header */}
                <a href="#" className="hidden sm:flex items-center gap-1 text-indigo-500 font-semibold text-sm hover:gap-2 transition-all duration-200">
                    Show all jobs
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* ── MOBILE: horizontal scroll ── */}
            <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {jobs.map((job) => (
                    <div key={job.id} className="snap-start flex-shrink-0 w-[75vw] max-w-[280px]">
                        <JobCard
                            job={job}
                            hovered={hoveredId === job.id}
                            onEnter={() => setHoveredId(job.id)}
                            onLeave={() => setHoveredId(null)}
                        />
                    </div>
                ))}
            </div>

            {/* Show all jobs — mobile bottom link */}
            <div className="flex sm:hidden mt-5">
                <a href="#" className="flex items-center gap-1 text-indigo-500 font-semibold text-sm">
                    Show all jobs
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* ── DESKTOP: 4-column grid ── */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        hovered={hoveredId === job.id}
                        onEnter={() => setHoveredId(job.id)}
                        onLeave={() => setHoveredId(null)}
                    />
                ))}
            </div>

        </section>
    );
}