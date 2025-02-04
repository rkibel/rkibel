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
        <div className={`p-4 rounded-lg shadow-lg ${success ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {success ? 'Message sent successfully!' : 'Failed to send message.'}
        </div>
    );
};

export default EmailPopup;
