/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { IJobsResponse, IQueryParam } from "@/types/job.types";
import { ICreateJobRequest, ICreateJobResponse } from "./jobcreate.type";

export const jobApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllJobs: builder.query<IJobsResponse, IQueryParam[] | undefined>({
            query: (args: IQueryParam[] | undefined) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: IQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: "/jobs",
                    method: "GET",
                    params: params,
                };
            },
            providesTags: ["jobs"],
        }),

        deleteJobs: builder.mutation({
            query: (id: string) => ({
                url: `/jobs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["jobs"],
        }),

        getSingleJob: builder.query({
            query: (id: string) => ({
                url: `/jobs/${id}`,
                method: "GET",
            }),
            providesTags: ["jobs"],
        }),

        createJobs: builder.mutation<ICreateJobResponse, ICreateJobRequest>({
            query: (data: ICreateJobRequest) => ({
                url: `/jobs`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["jobs"],
        }),

    }),
});

export const {
    useCreateJobsMutation,
    useDeleteJobsMutation,
    useGetAllJobsQuery,
    useGetSingleJobQuery
} = jobApi;
