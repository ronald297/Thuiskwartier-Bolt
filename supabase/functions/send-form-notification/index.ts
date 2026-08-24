import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const FROM = "Thuiskwartier <info@thuiskwartier.nl>";
const NOTIFY_TO = "info@thuiskwartier.nl";

interface Attachment {
  filename: string;
  content: string;
}

async function sendEmail(
  resendApiKey: string,
  to: string[],
  subject: string,
  html: string,
  replyTo?: string,
  attachments?: Attachment[],
) {
  const body: Record<string, unknown> = { from: FROM, to, subject, html };
  if (replyTo) body.reply_to = replyTo;
  if (attachments && attachments.length > 0) body.attachments = attachments;
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { type, data, attachments } = await req.json();
    const nl2br = (text: string) => (text || "").replace(/\n/g, "<br>");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let notifySubject: string;
    let notifyHtml: string;
    let confirmSubject: string;
    let confirmHtml: string;

    if (type === "contact") {
      notifySubject = `Nieuw contactbericht van ${data.name}`;
      notifyHtml = `
        <h2>Nieuw contactbericht via de website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Naam</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefoon</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Bericht</td><td style="padding:8px;border-bottom:1px solid #eee;">${nl2br(data.message)}</td></tr>
        </table>
      `;

      confirmSubject = "Bedankt voor je bericht";
      confirmHtml = `
        <p>Beste ${data.name},</p>
        <p>Bedankt voor je bericht. We hebben het goed ontvangen en nemen zo snel mogelijk contact met je op, meestal binnen 1 werkdag.</p>
        <p style="margin-top:16px;"><strong>Je bericht:</strong></p>
        <p style="background:#f9f9f9;padding:12px;border-radius:6px;">${nl2br(data.message)}</p>
        <p>Heb je een dringende vraag? Bel ons gerust op <a href="tel:0527798000">0527 798 000</a>.</p>
        <br>
        <p>Met vriendelijke groet,<br>Team Thuiskwartier</p>
      `;
    } else if (type === "service") {
      notifySubject = `Nieuw serviceverzoek van ${data.name}`;
      notifyHtml = `
        <h2>Nieuw serviceverzoek via de website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Naam</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Adres</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.address}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefoon</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Ordernummer</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.order_number || "Niet opgegeven"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Productgroep</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.category}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Omschrijving</td><td style="padding:8px;border-bottom:1px solid #eee;">${nl2br(data.description)}</td></tr>
        </table>
      `;

      confirmSubject = "Je serviceverzoek is ontvangen";
      confirmHtml = `
        <p>Beste ${data.name},</p>
        <p>Bedankt voor je serviceverzoek. We hebben het goed ontvangen en nemen het zo snel mogelijk in behandeling.</p>
        <p style="margin-top:16px;"><strong>Je omschrijving:</strong></p>
        <p style="background:#f9f9f9;padding:12px;border-radius:6px;">${nl2br(data.description)}</p>
        <p>Heb je een dringende vraag? Bel ons gerust op <a href="tel:0527798000">0527 798 000</a>.</p>
        <br>
        <p>Met vriendelijke groet,<br>Team Thuiskwartier</p>
      `;
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid form type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const validAttachments: Attachment[] | undefined =
      Array.isArray(attachments) && attachments.length > 0
        ? attachments.filter((a: Attachment) => a.filename && a.content)
        : undefined;

    const [notifyRes] = await Promise.all([
      sendEmail(resendApiKey, [NOTIFY_TO], notifySubject, notifyHtml, data.email, validAttachments),
      sendEmail(resendApiKey, [data.email], confirmSubject, confirmHtml),
    ]);

    if (!notifyRes.ok) {
      const errBody = await notifyRes.text();
      return new Response(
        JSON.stringify({ error: "Notification email failed", details: errBody }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
