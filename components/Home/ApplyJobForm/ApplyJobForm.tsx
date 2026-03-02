"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from '@/components/shared/Form/Form';
import NInput from '@/components/shared/Form/NInput';
import NTextArea from '@/components/shared/Form/NTextArea';
import { useApplyJobMutation } from '@/redux/features/applicationApi/application.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import z from 'zod';

const validationForm = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be less than 50 characters")
        .nonempty("Full Name is required"),

    email: z
        .string()
        .email("Please enter a valid email address")
        .nonempty("Email is required"),

    resumeLink: z
        .string()
        .url("Please enter a valid URL")
        .nonempty("Resume link is required"),

    coverNote: z
        .string()
        .min(50, "Cover letter must be at least 50 characters")
        .max(1000, "Cover letter must be less than 1000 characters")
        .nonempty("Cover letter is required"),
});

const ApplyJobForm = () => {
    const id = useParams().id;
    const [apply] = useApplyJobMutation()
    const router = useRouter()

    const handleApply = async (data: any) => {
        const toastId = toast.loading("Sending...")
        const payload = {
            jobId: id,
            ...data
        }
        const res = await apply(payload)
        if (res.data) {
            toast.success("Application sent successfully!", { id: toastId })
            router.push("/success-page")
        } else {
            toast.error((res?.error as any).data.message, { id: toastId })
        }
    }

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-4xl font-bold py-5'>Application Form</h1>
            <Form onSubmit={handleApply} resolver={zodResolver(validationForm)}>
                <NInput name='name' label='Full Name' placeholder='Enter your name' type='text'></NInput>
                <NInput name='email' label='Email' placeholder='Enter your email address' type='email'></NInput>
                <NInput name='resumeLink' label='Resume Link' placeholder='Enter your resume url' type='text'></NInput>
                <NTextArea name='coverNote' label='Cover letter' placeholder='Write your cover letter' ></NTextArea>
                <button className='px-4 py-2 cursor-pointer border border-2 text-black'>Apply</button>
            </Form>
        </div>
    );
};

export default ApplyJobForm;