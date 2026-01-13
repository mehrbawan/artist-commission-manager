import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { clientName, description, status, type, price } = await req.json();

    // For this MVP, we always attach commissions to demo user
    const demoUserEmail = "demo@demo.com";

    const user = await prisma.user.findUnique({
      where: { email: demoUserEmail },
    });

    if (!user) {
      return NextResponse.json({ error: "Demo user not found" }, { status: 404 });
    }

    const commission = await prisma.commission.create({
      data: {
        clientName,
        description,
        status,
        type,
        price,
        userId: user.id, // ← CHANGE demoUser to user
      },
    });

    return NextResponse.json(commission);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
