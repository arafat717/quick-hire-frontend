"use client";

import { useGetAllJobsQuery } from "@/redux/features/JobsApi/job.api";
import { IJob } from "@/types/job.types";
import Link from "next/link";
import { useState } from "react";

const tagColors: Record<string, string> = {
    Marketing: "bg-orange-100 text-orange-500",
    Design: "bg-teal-100 text-teal-600",
    Business: "bg-purple-100 text-purple-600",
    Technology: "bg-red-100 text-red-400",
    Engineering: "bg-blue-100 text-blue-600",
    Finance: "bg-yellow-100 text-yellow-600",
    Sales: "bg-pink-100 text-pink-500",
    Human_Resource: "bg-green-100 text-green-600",
};

function JobCard({ job, hovered, onEnter, onLeave }: {
    job: IJob;
    hovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    return (
        <Link href={`/details/${job?.id}`}>
            <div
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className={`flex flex-col gap-3 p-5 bg-white border rounded cursor-pointer transition-all duration-200 ${hovered ? "border-indigo-300 shadow-lg shadow-indigo-50" : "border-gray-200 shadow-sm"
                    }`}
            >
                {/* Logo + Badge */}
                <div className="flex items-start justify-between">
                    {job.logoUrl ? (
                        <img src={job.logoUrl} alt={job.company} className="w-10 h-10 rounded-lg object-contain" />
                    ) : (
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                            {job.company.charAt(0)}
                        </div>
                    )}
                    <span className="text-xs font-semibold text-gray-600 border border-gray-200 rounded px-2 py-1 whitespace-nowrap">
                        {job.type.replace("_", " ")}
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
                <p className="text-[16px] text-[#7C8493] leading-relaxed line-clamp-2">{job.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    <span className={`text-[14px] font-semibold px-3 py-1 rounded-full ${tagColors[job.category] ?? "bg-gray-100 text-gray-500"}`}>
                        {job.category.replace("_", " ")}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default function FeaturedJobs() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const { data } = useGetAllJobsQuery(undefined);

    const jobs = data?.data?.data;

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
                {jobs?.map((job: IJob) => (
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
                {jobs?.map((job: IJob) => (
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