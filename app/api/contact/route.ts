import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml, validate } from './validate';

export async function POST(request: Request) {
    // JSON-only blocks cross-site <form> posts (they can't send application/json without a preflight).
    if (!request.headers.get('content-type')?.startsWith('application/json')) {
        return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }
    if (Number(request.headers.get('content-length') ?? 0) > 10_000) {
        return NextResponse.json({ error: 'Message is too long.' }, { status: 413 });
    }

    const input = validate(await request.json().catch(() => null));
    if (typeof input === 'string') {
        return NextResponse.json({ error: input }, { status: 400 });
    }

    const name = escapeHtml(input.name);
    const email = escapeHtml(input.email);
    const message = escapeHtml(input.message).replace(/\n/g, '<br>');

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const response = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: process.env.TO_EMAIL!,
            replyTo: input.email,
            subject: `Portfolio message from ${input.name.replace(/[\r\n]+/g, ' ')}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        if (response.error) {
            console.error('Resend error:', response.error);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
