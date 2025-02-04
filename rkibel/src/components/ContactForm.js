'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import EmailPopup from './EmailPopup';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [messages, setMessages] = useState([]);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const onSubmit = async (data) => {
        try {
            await axios.post('/api/send-email', data);
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
            <form onSubmit={handleSubmit(onSubmit)} className="w-full py-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-md font-medium text-secondary">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required.' })}
                        className="mt-1 block w-full px-3 py-2 bg-transparent border border-muted rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-white"
                    />
                    {errors.name && <span className="text-accent text-xs">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-md font-medium text-secondary">Email *</label>
                    <input
                        type="text"
                        id="email"
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: { value: emailRegex, message: "Please enter a valid email address." }
                        })}
                        className="mt-1 block w-full px-3 py-2 bg-transparent border border-muted rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-white"
                    />
                    {errors.email && <span className="text-accent text-xs">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-md font-medium text-secondary">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        {...register('subject')}
                        className="mt-1 block w-full px-3 py-2 bg-transparent border border-muted rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-md font-medium text-secondary">Message *</label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'Message is required.' })}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 bg-transparent border border-muted rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent text-white"
                    />
                    {errors.message && <span className="text-accent text-xs">{errors.message.message}</span>}
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors font-mono"
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
