'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        error: null as string | null,
        success: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setFormData({ name: '', email: '', message: '' });
            setStatus({ loading: false, error: null, success: true });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus({
                loading: false,
                error: 'Failed to send message. Please try again.',
                success: false
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 
                    text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 
                    text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 
                    text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md 
                hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.error && (
                <p className="text-red-500 text-sm text-center">{status.error}</p>
            )}
            {status.success && (
                <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
            )}
        </form>
    );
}