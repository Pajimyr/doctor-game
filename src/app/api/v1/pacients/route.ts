import { NextRequest, NextResponse } from "next/server";
import {Pacient} from "@/Types/Pacient"

export async function GET() {
  return NextResponse.json({ data: pacients }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, age, diagnosis } = body;

  if (!name || !age || !diagnosis) {
    return NextResponse.json(
      { error: "Chybí povinná pole: name, age, diagnosis" },
      { status: 400 }
    );
  }

  const newPacient: Pacient = {
    id: String(pacients.length + 1),
    name,
    age,
    diagnosis,
  };

  pacients.push(newPacient);

  return NextResponse.json({ data: newPacient }, { status: 201 });
}
