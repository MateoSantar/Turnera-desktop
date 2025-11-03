import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const emailParam: string = body.email || "";
    const passwordParam: string = body.password || "";
    const phpRes = await fetch(`${process.env.DB_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "login",
        email: emailParam,
        password: passwordParam,
      }),
    });
    if (!phpRes.ok) {
      const text = await phpRes.text();
      return NextResponse.json(
        { error: `Error del backend PHP: ${text}` },
        { status: phpRes.status }
      );
    }

    const data = await phpRes.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error en /login:", err);
    return NextResponse.json(
      { error: "Error interno del servidor "+err },
      { status: 500 }
    );
  }
}
