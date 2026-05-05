'use client';
import { useEffect, useState } from 'react';

const EmailPopup = ({ success }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur ${success ? 'border-emerald-300/30 bg-emerald-500/90' : 'border-red-300/30 bg-red-500/90'} text-white`}>
            {success ? 'Message sent successfully!' : 'Failed to send message.'}
        </div>
    );
};

export default EmailPopup;
