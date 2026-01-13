import { prisma } from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const demoUserEmail = "demo@demo.com";
  const user = await prisma.user.findUnique({
    where: { email: demoUserEmail },
    include: { commissions: true },
  });

  if (!user) return <p>User not found</p>;

  const commissions = user.commissions;

  const totalRevenue = commissions.reduce((sum: number, c: { price: number }) => sum + c.price, 0);
  const completedRevenue = commissions
    .filter((c: { status: string }) => c.status === "completed")
    .reduce((sum: number, c: { price: number }) => sum + c.price, 0);
  const pendingRevenue = commissions
    .filter((c: { status: string }) => c.status === "pending")
    .reduce((sum: number, c: { price: number }) => sum + c.price, 0);

  const stats = [
    { label: "Total Revenue", value: totalRevenue, color: "bg-blue-500" },
    { label: "Pending", value: pendingRevenue, color: "bg-yellow-500" },
    { label: "Completed", value: completedRevenue, color: "bg-green-500" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-[10vh]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.email}</p>
        </div>

        {/* Revenue Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                ${(stat.value / 100).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Commissions List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Commissions</h2>
          
          {commissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No commissions yet.</p>
              <p className="text-gray-400 text-sm mt-2">Your commission requests will appear here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {commissions.map((c) => (
                <div
                  key={c.id}
                  className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{c.clientName}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(c.status)}`}>
                          {c.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{c.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="capitalize">{c.type.replace('_', ' ')}</span>
                        <span>•</span>
                        <span>Requested: {new Date(c.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        ${(c.price / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
