import { IJob, JobCategory, JobType } from "@/types/job.types";


// Add this to your types file
export interface ICreateJobRequest {
    title: string;
    company: string;
    location: string;
    category: JobCategory;
    type: JobType;
    description: string;
    requirements?: string[];
    salary?: string;
    logoUrl?: string;
}

export interface ICreateJobResponse {
    success: boolean;
    message: string;
    data: IJob;
}