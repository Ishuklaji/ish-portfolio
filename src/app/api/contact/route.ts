import { Resend } from "resend";
import { personal } from "@/lib/content";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!email || !message) {
    return Response.json({ error: "Email and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email service isn't configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: personal.email.toLowerCase(),
    replyTo: email,
    subject: `Portfolio contact from ${name || "website visitor"}`,
    text: `Name: ${name || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }

  return Response.json({ success: true });
}
