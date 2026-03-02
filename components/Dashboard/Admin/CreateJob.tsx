"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/shared/Form/Form';
import NInput from '@/components/shared/Form/NInput';
import NTextArea from '@/components/shared/Form/NTextArea';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NSelect from '@/components/shared/Form/NSelect';
import { toast } from 'sonner';
import { useCreateJobsMutation } from '@/redux/features/JobsApi/job.api';
import { useRouter } from 'next/navigation';

const jobValidationSchema = z.object({
    title: z.string().min(1, "Job Title is required"),
    company: z.string().min(1, "Company is required"),
    location: z.string().min(1, "Location is required"),
    category: z.string().min(1, "Category is required"),
    type: z.enum(["Full_Time", "Part_Time"], "Job Type must be Full_Time or Part_Time"),
    salary: z
        .string()
        .optional()
        .refine((val) => !val || /^\$?[\d,]+(\s?-\s?\$?[\d,]+)?$/.test(val), {
            message: "Salary must be in format '$100,000 - $130,000'",
        }),
    logoUrl: z
        .string()
        .url("Logo URL must be a valid URL")
        .optional(),
    description: z.string().min(1, "Job Description is required"),
});


const CreateJob = () => {
    const [addJob] = useCreateJobsMutation()
    const router = useRouter()

    const handleAddJob = async (data: any) => {
        const toasId = toast.loading("Submiting...")
        console.log(data)
        const res = await addJob(data)
        if (res?.data) {
            toast.success("Job added successfully!", { id: toasId })
            router.push('/admin/jobs')
        } else {
            toast.error((res?.error as any)?.data?.message, { id: toasId })
        }
    }

    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <h1 className='text-4xl text-center font-bold my-4'>Add New Job</h1>
            <Form onSubmit={handleAddJob} resolver={zodResolver(jobValidationSchema)}>
                <NInput name="title" label="Job Title" placeholder="Enter job title" type='text' />
                <NInput name="company" label="Company" placeholder="Enter company name" type='text' />
                <NInput name="location" label="Location" placeholder="Enter location" type='text' />
                <NSelect items={[
                    { label: "Design", value: "Design" },
                    { label: "Marketing", value: "Marketing" },
                    { label: "Engineering", value: "Engineering" },
                    { label: "Technology", value: "Technology" },
                    { label: "Business", value: "Business" },
                    { label: "Finance", value: "Finance" },
                    { label: "Human Resource", value: "Human_Resource" },
                    { label: "Sales", value: "Sales" },
                ]} name="category" label="Category" placeholder="Enter category" type='text' />
                <NSelect items={[
                    { label: "Full-Time", value: "Full_Time" },
                    { label: "Part-Time", value: "Part_Time" },
                ]} name="type" label="Job Type" placeholder="Full_Time / Part_Time" type='text' />
                <NInput name="salary" label="Salary(Optional)" placeholder="Enter salary range " type='number' />
                <NInput name="logoUrl" label="Logo URL(Optional)" placeholder="Enter logo URL " type='text' />
                <NTextArea name="description" label="Job Description" placeholder="Enter job description" />
                <button
                    type="submit"
                    className="bg-blue-600 border border-2 text-black cursor-pointer px-6 py-2 rounded hover:bg-blue-700 mt-4"
                >
                    Submit Job
                </button>
            </Form>
        </div>
    );
};

export default CreateJob;