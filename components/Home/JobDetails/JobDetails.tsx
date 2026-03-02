"use client"
import { useGetSingleJobQuery } from '@/redux/features/JobsApi/job.api';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const JobDetailsPage = () => {
    const id = useParams().id as string;
    console.log(id)
    const { data } = useGetSingleJobQuery(id)
    console.log(data?.data)
    const job = data?.data


    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">

                {/* Header Section */}
                <div className="p-8 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-6">
                        <Image
                            src={job?.logoUrl || "/placeholder.png"}
                            alt={`${job?.company} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{job?.title}</h1>
                            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                                <span className="flex items-center font-medium text-blue-600">{job?.company}</span>
                                <span>• {job?.location}</span>
                                <span>• {job?.salary}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-8">
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {job?.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
                        <ul className="grid grid-cols-1 gap-3">
                            {job?.requirements.map((req: string[], index: number) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Action Button */}
                    <Link href={`/apply/${id}`}>
                        <button
                            className="w-full sm:w-auto cursor-pointer boreder border-2 mt-5 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-black font-semibold rounded-lg duration-200 shadow-md"
                        >
                            Apply for this Job
                        </button></Link>
                </div>

                {/* Footer Meta */}
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 px-20">
                        Posted on March 2, 2026 • Full-Time Engineering Role
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;