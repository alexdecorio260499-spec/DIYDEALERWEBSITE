import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
    full_name: string;
    email: string;
    plan_title: string;
    revamp_styles: string;
    pictures_urls: string[];
}

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { full_name, email, plan_title, revamp_styles, pictures_urls } = await req.json() as EmailRequest;

        if (!RESEND_API_KEY) {
            throw new Error("Missing RESEND_API_KEY environment variable");
        }

        // 1. Send confirmation email to the CUSTOMER
        const customerEmailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "DIY Dealer <onboarding@resend.dev>", // Or your verified domain
                to: [email],
                subject: "We've received your garden details! 🌿",
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2E6142;">Thank you, ${full_name}!</h1>
            <p>We confirm that we have received your project details and photos for the <strong>${plan_title}</strong>.</p>
            <p>Our design team is already reviewing your submission. You can expect to hear from us within 24-48 hours with the next steps.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your Submission Summary:</h3>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Plan:</strong> ${plan_title}</li>
                <li><strong>Styles:</strong> ${revamp_styles}</li>
                <li><strong>Photos Uploaded:</strong> ${pictures_urls.length}</li>
              </ul>
            </div>

            <p>If you have any questions in the meantime, simply reply to this email.</p>
            <p>Best regards,<br/>The DIY Dealer Team</p>
          </div>
        `,
            }),
        });

        if (!customerEmailRes.ok) {
            const error = await customerEmailRes.text();
            console.error("Error sending customer email:", error);
        }

        // 2. Send notification email to the ADMIN
        const adminEmailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "DIY Dealer App <onboarding@resend.dev>",
                to: ["yourdiydealer@gmail.com"], // Admin email
                subject: `🆕 New Submission: ${plan_title} - ${full_name}`,
                html: `
          <div style="font-family: sans-serif;">
            <h1>New Project Submission</h1>
            <p>A new ${plan_title} has been purchased and details submitted.</p>
            
            <ul>
              <li><strong>Name:</strong> ${full_name}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Plan:</strong> ${plan_title}</li>
              <li><strong>Styles Wished:</strong> ${revamp_styles}</li>
            </ul>

            <h3>Uploaded Photos:</h3>
            <ul>
              ${pictures_urls.map(url => `<li><a href="${url}">View Photo</a></li>`).join('')}
            </ul>
          </div>
        `,
            }),
        });

        if (!adminEmailRes.ok) {
            const error = await adminEmailRes.text();
            console.error("Error sending admin email:", error);
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200,
        });

    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 400,
        });
    }
});
