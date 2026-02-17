import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "Allen_Kameron_ITDev.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=\"Allen_Kameron_ITDev.pdf\"",
      },
    });
  } catch (error) {
    console.error("Error serving resume PDF:", error);
    return new NextResponse("Resume not found", { status: 404 });
  }
}
