import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const res = await fetch(`${process.env.DB_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "getusers",
      }),
      next: {revalidate:10}
    });

    // Intenta parsear la respuesta de tu backend PHP
    const data = await res.json();

    // Devuelve una respuesta JSON válida para Next.js
    return NextResponse.json(data);
  } catch (error: any) {
    // Devuelve el error como una respuesta con estado 500
    return NextResponse.json(
      { message: "Error en la API interna", error: error.message },
      { status: 500 }
    );
  }
}
