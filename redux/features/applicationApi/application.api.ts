/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

export const applicationApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        applyJob: builder.mutation({
            query: (data: any) => ({
                url: `/applications`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["application"],
        }),
    }),
});

export const {
    useApplyJobMutation
} = applicationApi;
