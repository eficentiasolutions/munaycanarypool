export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const contactEmail = import.meta.env.CONTACT_EMAIL;

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
          <tr><td><strong>Nombre</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Teléfono</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Plan</strong></td><td>${plan || 'Revisión Gratuita (General)'}</td></tr>
          <tr><td><strong>Mensaje</strong></td><td>${message || '—'}</td></tr>
        </table>
        <p style="color:#888;font-size:12px">Puedes responder directamente a este email para contactar con ${name}.</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
  }
};
