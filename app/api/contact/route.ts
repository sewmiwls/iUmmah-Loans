import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, message: "Google Script URL is missing" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const resultText = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to save message",
          details: resultText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}