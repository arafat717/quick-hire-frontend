import { LayoutDashboard, Briefcase, Users, DollarSign } from "lucide-react";

const AdminHome = () => {
    const stats = [
        {
            title: "Total Jobs",
            value: 128,
            icon: Briefcase,
            bgColor: "bg-blue-100",
            iconColor: "text-blue-500",
        },
        {
            title: "Total Applications",
            value: 542,
            icon: Users,
            bgColor: "bg-green-100",
            iconColor: "text-green-500",
        },
        {
            title: "Registered Users",
            value: 1024,
            icon: Users,
            bgColor: "bg-purple-100",
            iconColor: "text-purple-500",
        },
        {
            title: "Revenue",
            value: "$12,540",
            icon: DollarSign,
            bgColor: "bg-yellow-100",
            iconColor: "text-yellow-500",
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <LayoutDashboard className="w-6 h-6" /> Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex items-center p-4 rounded-lg shadow-sm ${stat.bgColor}`}
                    >
                        <stat.icon className={`w-10 h-10 ${stat.iconColor} mr-4`} />
                        <div>
                            <p className="text-gray-700 font-semibold">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional sections can go here */}
            <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
                <p className="text-gray-600">You can list recent job applications here.</p>
            </div>
        </div>
    );
};

export default AdminHome;

