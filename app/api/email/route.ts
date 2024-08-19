import { sendEmail } from "@/lib/mailer";
import { NextResponse } from "next/server";
import { ContactFormType } from "../../types/email";

export async function POST(request: Request) {
  try {
    const data: ContactFormType = await request.json();
    await sendEmail(data);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new NextResponse("Failed to send email", { status: 500 });
  }
}
