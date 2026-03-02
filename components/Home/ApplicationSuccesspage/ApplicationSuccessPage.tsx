import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-center">
            <CheckCircle className="text-green-500 w-20 h-20 mb-6" />
            <h1 className="text-3xl font-bold text-green-700 mb-4">
                Your Application Was Sent Successfully!
            </h1>
            <p className="text-gray-700 mb-2">
                Thank you for applying. We appreciate your interest in joining our team.
            </p>
            <p className="text-gray-700 mb-4">
                Our recruitment team will review your application and get back to you soon.
            </p>
            <p className="text-gray-600 mb-6">
                In the meantime, feel free to explore more opportunities on our website.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default SuccessPage;