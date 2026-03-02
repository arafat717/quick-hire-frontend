"use client";

import { useGetAllJobsQuery } from "@/redux/features/JobsApi/job.api";
import { IJob } from "@/types/job.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tagColors: Record<string, string> = {
    "Full-Time": "bg-green-100 text-green-600",
    Marketing: "bg-orange-100 text-orange-500",
    Design: "bg-indigo-100 text-indigo-600",
    Engineering: "bg-blue-100 text-blue-600",
    Business: "bg-purple-100 text-purple-600",
    Technology: "bg-red-100 text-red-400",
    Finance: "bg-yellow-100 text-yellow-600",
    Sales: "bg-pink-100 text-pink-500",
    Human_Resource: "bg-green-100 text-green-600",
};

export default function LatestJobsOpen() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const { data } = useGetAllJobsQuery(undefined);

    const jobs = data?.data?.data;

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 font-sans mb-20">
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

            {/* MOBILE: vertical single column */}
            <div className="flex flex-col gap-3 sm:hidden">
                {jobs?.map((job: IJob) => (
                    <Link href={`/details/${job?.id}`} key={job.id}>
                        <div

                            className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
                        >
                            {job.logoUrl ? (
                                <Image src={job.logoUrl} alt={job.company} className="w-12 h-12 rounded-xl object-contain flex-shrink-0" width={1000} height={1000} />
                            ) : (
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">
                                    {job.company.charAt(0)}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {job.company} <span className="mx-1">·</span> {job.location}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-green-300 text-green-600">
                                        {job.type.replace("_", " ")}
                                    </span>
                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[job.category] ?? "bg-gray-100 text-gray-500"}`}>
                                        {job.category.replace("_", " ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                <a href="#" className="flex items-center gap-1 text-indigo-500 font-semibold text-sm mt-2">
                    Show all jobs
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>

            {/* DESKTOP: 2-column grid */}
            <div className="hidden sm:grid grid-cols-2 gap-4">
                {jobs?.map((job: IJob) => (
                    <Link key={job.id} href={`/details/${job?.id}`}>
                        <div

                            onMouseEnter={() => setHoveredId(job.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`flex items-start gap-4 p-5 bg-white border rounded-xl cursor-pointer transition-all duration-200 ${hoveredId === job.id
                                ? "border-indigo-300 shadow-lg shadow-indigo-50"
                                : "border-gray-200 shadow-sm"
                                }`}
                        >
                            {job.logoUrl ? (
                                <Image src={job.logoUrl} alt={job.company} className="w-12 h-12 rounded-xl object-contain flex-shrink-0" width={1000} height={1000} />
                            ) : (
                                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">
                                    {job.company.charAt(0)}
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-[#25324B] text-[20px]">{job.title}</h3>
                                <p className="text-[16px] text-[#515B6F] mt-0.5">
                                    {job.company} <span className="mx-1">·</span> {job.location}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-[14px] font-semibold px-3 py-1 rounded-full border border-green-300 text-green-600 bg-transparent">
                                        {job.type.replace("_", " ")}
                                    </span>
                                    <span className={`text-[14px] font-semibold px-3 py-1 rounded-full ${tagColors[job.category] ?? "bg-gray-100 text-gray-500"}`}>
                                        {job.category.replace("_", " ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}