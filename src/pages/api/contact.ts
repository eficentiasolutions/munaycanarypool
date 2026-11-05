export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const esc = (v: unknown) =>
  String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export const POST: APIRoute = async ({ request, locals }) => {
  // Cloudflare: secrets en runtime.env; en local (astro dev) caen a import.meta.env
  const env = (locals as any).runtime?.env ?? {};
  const apiKey = env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;
  const contactEmail = env.CONTACT_EMAIL ?? import.meta.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error('Faltan variables RESEND_API_KEY / CONTACT_EMAIL');
    return new Response(JSON.stringify({ error: 'Configuración del servidor incompleta' }), { status: 500 });
  }
  const resend = new Resend(apiKey);

  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }

  const { name, email, phone, message, plan } = data;

  if (!name || !email || !phone) {
    return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Munay Canary Pool <noreply@eficentiasolutions.com>',
      to: [contactEmail],
      replyTo: email,
      subject: `Nuevo contacto desde la web${plan ? ` — ${plan}` : ''}`,
      html: `
        <h2>Nuevo contacto desde munaycanarypool.es</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Nombre</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Teléfono</strong></td><td>${esc(phone)}</td></tr>
          <tr><td><strong>Plan</strong></td><td>${esc(plan || 'Revisión Gratuita (General)')}</td></tr>
          <tr><td><strong>Mensaje</strong></td><td>${esc(message || '—')}</td></tr>
        </table>
        <p style="color:#888;font-size:12px">Puedes responder directamente a este email para contactar con ${esc(name)}.</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
  }
};
