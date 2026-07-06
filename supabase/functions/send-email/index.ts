import nodemailer from "npm:nodemailer";

const GMAIL_USER = Deno.env.get("GMAIL_USER")!;
const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD")!;
const TO_EMAIL = Deno.env.get("TO_EMAIL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message } = await req.json();

    console.log("Connecting SMTP...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    console.log("Sending email...");

    const info = await transporter.sendMail({
      from: `"Portfolio Website" <${GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `📩 Portfolio Contact | ${name}`,
      html: `
    <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">
      <div style="max-width:650px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.1);">

        <div style="background:#2563eb;padding:24px;color:white;">
          <h2 style="margin:0;">📩 New Portfolio Message</h2>
          <p style="margin-top:8px;font-size:14px;">
            Someone has contacted you through your portfolio website.
          </p>
        </div>

        <div style="padding:30px;">

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px;font-weight:bold;width:140px;">👤 Name</td>
              <td style="padding:12px;">${name}</td>
            </tr>

            <tr style="background:#f8fafc;">
              <td style="padding:12px;font-weight:bold;">📧 Email</td>
              <td style="padding:12px;">
                <a href="mailto:${email}">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;vertical-align:top;">
                💬 Message
              </td>
              <td style="padding:12px;white-space:pre-wrap;">
                ${message}
              </td>
            </tr>
          </table>

          <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">

          <div style="background:#eff6ff;padding:16px;border-radius:8px;">
            <strong>💡 Tip</strong><br><br>
            Click <b>Reply</b> in Gmail to respond directly to
            <b>${email}</b>.
          </div>

        </div>

        <div style="background:#f8fafc;padding:20px;text-align:center;color:#64748b;font-size:13px;">
          Portfolio Contact Form • nuh.dev
        </div>

      </div>
    </div>
  `,
      text: `
New Portfolio Message

Name : ${name}
Email : ${email}

Message:
${message}

Reply directly to this email to respond to the sender.
`,
    });

    console.log("SUCCESS:", info);

    return new Response(
      JSON.stringify({
        success: true,
        info,
      }),
      {
        status: 200,
        headers: corsHeaders,
      },
    );
  } catch (err: any) {
    console.error(err);

    return new Response(
      JSON.stringify({
        success: false,
        error: err?.message,
        stack: err?.stack,
      }),
      {
        status: 500,
        headers: corsHeaders,
      },
    );
  }
});
