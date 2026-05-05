'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailPopup from './EmailPopup';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [messages, setMessages] = useState([]);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                throw new Error(errorBody.error || 'Failed to send message.');
            }

            setMessages(prevMessages => [
                ...prevMessages,
                { id: Date.now(), success: true }
            ]);
            reset();
        } catch (error) {
            console.error('Error:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { id: Date.now(), success: false }
            ]);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required.' })}
                        className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white shadow-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                    />
                    {errors.name && <span className="text-cyan-200 text-xs">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200">Email *</label>
                    <input
                        type="text"
                        id="email"
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: { value: emailRegex, message: "Please enter a valid email address." }
                        })}
                        className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white shadow-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                    />
                    {errors.email && <span className="text-cyan-200 text-xs">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-200">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        {...register('subject')}
                        className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white shadow-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200">Message *</label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'Message is required.' })}
                        rows="4"
                        className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white shadow-sm outline-none transition placeholder:text-slate-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                    />
                    {errors.message && <span className="text-cyan-200 text-xs">{errors.message.message}</span>}
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
                {messages.map(message => (
                    <EmailPopup key={message.id} success={message.success} />
                ))}
            </div>
        </>
    );
};

export default ContactForm;
