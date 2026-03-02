export default function CompaniesSection() {
    const companies = [
        {
            name: "vodafone",
            logo: (
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 12 6z" />
                    </svg>
                    <span className="text-lg font-semibold tracking-tight">vodafone</span>
                </div>
            ),
        },
        {
            name: "intel",
            logo: (
                <span className="text-xl font-bold italic tracking-tight">intel.</span>
            ),
        },
        {
            name: "TESLA",
            logo: (
                <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 5.362L10.4 2H3.6C4.8 5.2 7.6 7.6 12 8c4.4-.4 7.2-2.8 8.4-6H13.6L12 5.362zM12 22l-1.6-9.2C7.6 12.4 5 10.8 3.6 8.4c1.6 1.2 4 2 8.4 2.4 4.4-.4 6.8-1.2 8.4-2.4C19 10.8 16.4 12.4 13.6 12.8L12 22z" />
                    </svg>
                    <span className="text-xl font-bold tracking-[0.15em]">TESLA</span>
                </div>
            ),
        },
        {
            name: "AMD",
            logo: (
                <div className="flex items-center gap-0.5">
                    <span className="text-xl font-extrabold tracking-tight">AMD</span>
                    <svg className="w-4 h-4 mb-0.5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0 L16 8 L8 16 L0 8 Z" />
                    </svg>
                </div>
            ),
        },
        {
            name: "Talkit",
            logo: (
                <span className="text-xl font-bold tracking-tight">Talkit</span>
            ),
        },
    ];

    return (
        <section className="bg-white border-t border-gray-100 py-8 px-6 lg:px-12 my-10">
            <div className="max-w-7xl mx-auto">
                <p className="text-[18px] text-[#202430] font-medium mb-6">Companies we helped grow</p>

                {/* Desktop: single row justified */}
                <div className="hidden sm:flex items-center justify-between">
                    {companies.map((c) => (
                        <div
                            key={c.name}
                            className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer"
                        >
                            {c.logo}
                        </div>
                    ))}
                </div>

                {/* Mobile: 2-column grid */}
                <div className="grid grid-cols-2 sm:hidden gap-x-6 gap-y-5">
                    {companies.map((c) => (
                        <div
                            key={c.name}
                            className="text-gray-300 hover:text-gray-400 transition-colors cursor-pointer flex items-center"
                        >
                            {c.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}