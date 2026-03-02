/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useDeleteJobsMutation, useGetAllJobsQuery } from "@/redux/features/JobsApi/job.api";
import { Delete, Trash } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { el } from "date-fns/locale";

const JobList = () => {
    const { data, isLoading, isError } = useGetAllJobsQuery(undefined);
    const jobs = data?.data?.data || [];
    const [deleteJob] = useDeleteJobsMutation()

    const handleDelete = async (id: string) => {
        const toastId = toast.loading("Deleting...")
        // Call your delete API here
        console.log("Delete job with id:", id);
        const res = await deleteJob(id)
        if (res?.data) {
            toast.success("Job deleted successfully!", { id: toastId })
        } else {
            toast.error((res?.error as any)?.data?.message, { id: toastId })
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Job List</h1>
                <Link href={'/admin/create-job'}>
                    <button
                        className="bg-blue-600 text-black border border-2 cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => console.log("Navigate to add job page")}
                    >
                        Add New Job
                    </button>
                </Link>
            </div>

            {isLoading && <p>Loading jobs...</p>}
            {isError && <p>Error loading jobs!</p>}

            {!isLoading && !isError && jobs.length > 0 && (
                <table className="max-w-7xl border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Company</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Salary</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id}>
                                <td className="border px-4 py-2">{job.title}</td>
                                <td className="border px-4 py-2">{job.company}</td>
                                <td className="border px-4 py-2">{job.category}</td>
                                <td className="border px-4 py-2">{job.location}</td>
                                <td className="border px-4 py-2">{job.salary}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(job.id)}
                                    >
                                        <Trash className="text-red-400 cursor-pointer"></Trash>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {!isLoading && jobs.length === 0 && <p>No jobs available.</p>}
        </div>
    );
};

export default JobList;