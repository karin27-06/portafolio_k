// src/pages/api/contact.js

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nombre, email, asunto, mensaje } = data;

    // Validar datos
    if (!nombre || !email || !asunto || !mensaje) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Todos los campos son obligatorios' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar email usando Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Portafolio <onboarding@resend.dev>', // Cambiar cuando tengas dominio verificado
        to: import.meta.env.MI_EMAIL, // Tu email
        reply_to: email,
        subject: `Nuevo mensaje de portafolio: ${asunto}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #667eea;">Nuevo mensaje desde tu portafolio</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Asunto:</strong> ${asunto}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h3 style="color: #333;">Mensaje:</h3>
              <p style="color: #666; line-height: 1.6;">${mensaje}</p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
            <p style="color: #999; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
            </p>
          </div>
        `
      })
    });

    if (!response.ok) {
      throw new Error('Error al enviar el email');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensaje enviado correctamente' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al procesar la solicitud' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}