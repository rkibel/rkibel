import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();
        const mailUser = process.env.EMAIL;
        const mailPassword = process.env.PASSWORD;

        if (!mailUser || !mailPassword) {
            console.error('Missing EMAIL or PASSWORD environment variable.');
            return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mailUser,
                pass: mailPassword,
            },
        });

        const mailOptions = {
            from: `"Ron Kibel Portfolio" <${mailUser}>`,
            replyTo: email,
            to: mailUser,
            subject: subject ? (`Portfolio Contact Submission: ${subject}`) : 'Portfolio Contact Submission',
            text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
