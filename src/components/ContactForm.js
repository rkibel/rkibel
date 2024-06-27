import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import EmailPopup from './EmailPopup';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [messages, setMessages] = useState([]);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/send-email', data);
            setMessages(prevMessages => [
                ...prevMessages,
                { id: Date.now(), success: true }
            ]);
            reset();
        } catch (error) {
            setMessages(prevMessages => [
                ...prevMessages,
                { id: Date.now(), success: false }
            ]);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl py-8">
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-slate-600">Full Name *</label>
            <input type="text" id="name" {...register('name', { required: 'Name is required.' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email *</label>
            <input type="text" id="email" {...register('email', { required: 'Email is required.', pattern: {value: emailRegex, message: "Please enter a valid email address." }})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-slate-600">Subject</label>
            <input type="text" id="subject" {...register('subject', { required: false })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message *</label>
            <textarea id="message" {...register('message', { required: 'Message is required.' })} rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <div className="mt-4">
            <button type="submit" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
        </div>
        </form>
        
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {messages.map(message => (
          <EmailPopup key={message.id} success={message.success}/>
        ))}
        </div>

        </>
    );  
};

export default ContactForm;
