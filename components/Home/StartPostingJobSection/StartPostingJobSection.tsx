"use client";

import Image from 'next/image';
import dashimage from '../../../public/images/dashboard.png';

export default function StartPostingJobSection() {
    return (
        <section className="relative w-full bg-indigo-600  mx-auto max-w-7xl mb-28 overflow-hidden py-25 md:py-0 my-20">

            {/* Decorative white triangle top-left */}
            <div
                className="absolute -top-1 -left-1 w-36 h-30 bg-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />

            {/* ───── MOBILE layout (hidden on sm+) ───── */}
            <div className="flex sm:hidden flex-col items-center text-center px-6 pt-16 pb-0 gap-8">
                {/* Text */}
                <div className="z-10">
                    <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
                        Start posting jobs today
                    </h2>
                    <p className="mt-3 text-indigo-200 text-sm font-medium">
                        Start posting jobs for only $10.
                    </p>
                    <button className="mt-5 w-full px-6 py-3 bg-white text-indigo-600 font-bold text-sm rounded-lg hover:bg-indigo-50 transition-all duration-200">
                        Sign Up For Free
                    </button>
                </div>

                {/* Dashboard image sits at bottom */}
                <div className="relative w-full z-10">
                    <Image
                        src={dashimage}
                        alt="Dashboard preview"
                        width={600}
                        height={500}
                        className="w-full rounded-t-xl drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* ───── DESKTOP layout (hidden on mobile) ───── */}
            <div className="hidden sm:flex relative flex-row items-center justify-between px-14 py-16 gap-10">
                {/* LEFT: Text */}
                <div className="flex-shrink-0 max-w-xs z-10">
                    <h2 className="text-4xl font-extrabold text-white leading-tight tracking-tight">
                        Start posting<br />jobs today
                    </h2>
                    <p className="mt-4 text-indigo-200 text-sm font-medium">
                        Start posting jobs for only $10.
                    </p>
                    <button className="mt-6 inline-block px-6 py-3 border-2 border-white text-white font-bold text-sm rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-200">
                        Sign Up For Free
                    </button>
                </div>

                {/* RIGHT: Dashboard Image */}
                <div className="relative flex-1 z-10 h-80">
                    <Image
                        src={dashimage}
                        alt="Dashboard preview"
                        width={600}
                        height={500}
                        className="absolute -bottom-16 right-0 w-[580px] drop-shadow-2xl rounded-tl-xl"
                    />
                </div>
            </div>

            {/* Decorative white triangle bottom-right */}
            <div
                className="absolute bottom-0 -right-1 w-36 h-30 bg-white"
                style={{ clipPath: "polygon(100% 2%, 0% 100%, 100% 100%)" }}
            />
        </section>
    );
}