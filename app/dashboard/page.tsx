import { prisma } from "@/lib/prisma";

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

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Welcome, {user.email}</p>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Money Stats</h2>
        <p>Total revenue: ${totalRevenue / 100}</p>
        <p>Pending: ${pendingRevenue / 100}</p>
        <p>Completed: ${completedRevenue / 100}</p>
      </div>

      <h2 className="text-xl mb-2">Commissions</h2>
      {commissions.length === 0 ? (
        <p>No commissions yet.</p>
      ) : (
        <ul className="space-y-2">
          {commissions.map((c) => (
            <li key={c.id} className="border p-2 rounded flex justify-between">
              <div>
                <strong>{c.clientName}</strong> ({c.type}) - ${c.price / 100}
                <p className="text-sm text-gray-500">{c.description}</p>
                <p className="text-xs text-gray-400">
                  Requested: {new Date(c.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span className="italic">{c.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
