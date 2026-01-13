"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCommissionPage() {
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("sketch"); 
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const priceMap: Record<string, number> = {
    sketch: 1500,
    full_color: 5000,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const commissionData = {
        clientName,
        description,
        type,
        price: priceMap[type],
        status,
      };

      const res = await fetch("/api/commissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commissionData),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess(true);
      setClientName("");
      setDescription("");
      setType("sketch");
    } catch {
      setError("Network error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-4">Request a Commission</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <input
          type="text"
          placeholder="Your Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="sketch">Sketch - $15</option>
          <option value="full_color">Full Color - $50</option>
        </select>

        <textarea
          placeholder="Description of the commission"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      {success && <p className="text-green-500 mt-2">Commission submitted!</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
