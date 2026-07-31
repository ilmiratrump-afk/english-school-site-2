import { NextRequest, NextResponse } from "next/server";
import { isDatabaseAvailable } from "@/lib/db";
import { createGroupRegistration } from "@/lib/models";
import { mockGroupRegistrations } from "@/lib/mock-data";
import { groupRegistrationSchema } from "@/lib/validation";

export async function GET() {
  const dbAvailable = await isDatabaseAvailable();

  if (dbAvailable) {
    try {
      return NextResponse.json({ message: "OK" });
    } catch (error) {
      console.error("Ошибка получения заявок:", error);
      return NextResponse.json(
        { error: "Ошибка получения данных из DynamoDB" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(mockGroupRegistrations);
}

export async function POST(request: NextRequest) {
  const dbAvailable = await isDatabaseAvailable();

  if (!dbAvailable) {
    try {
      const body = await request.json();
      const parsed = groupRegistrationSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          { error: "Некорректные данные", details: parsed.error.flatten() },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { message: "Заявка принята", ...parsed.data },
        { status: 201 }
      );
    } catch {
      return NextResponse.json(
        { error: "Некорректный запрос" },
        { status: 400 }
      );
    }
  }

  try {
    const body = await request.json();

    const parsed = groupRegistrationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Некорректные данные", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const registration = await createGroupRegistration(parsed.data);

    return NextResponse.json(registration, { status: 201 });
  } catch (error) {
    console.error("Ошибка создания заявки:", error);
    return NextResponse.json(
      { error: "Ошибка создания заявки" },
      { status: 500 }
    );
  }
}
