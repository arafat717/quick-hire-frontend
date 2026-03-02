// types/job.types.ts
export type JobType = "Full_Time" | "Part_Time" | "Remote" | "Contract" | "Internship";

export type JobCategory =
    | "Design"
    | "Marketing"
    | "Engineering"
    | "Technology"
    | "Business"
    | "Finance"
    | "Human_Resource"
    | "Sales";

export interface IJob {
    id: string;
    title: string;
    company: string;
    location: string;
    category: JobCategory;
    type: JobType;
    description: string;
    requirements: string[];
    salary: string | null;
    logoUrl: string | null;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IMeta {
    total: number;
    page: number;
    limit: number;
}

export interface IJobsResponse {
    success: boolean;
    message: string;
    data: {
        meta: IMeta;
        data: IJob[];
    };
}

export interface IQueryParam {
    name: string;
    value: string | number;
}