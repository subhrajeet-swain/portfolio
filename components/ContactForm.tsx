'use client';
import { useState } from 'react';

const input = 'mt-1.5 block w-full rounded-xl bg-surface border border-white/10 text-content px-4 py-3 ' +
    'placeholder:text-content/30 hover:border-white/20 focus:outline-none focus:border-primary/60 ' +
    'focus:ring-2 focus:ring-primary/20 transition-colors';

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
                const { error } = await response.json().catch(() => ({ error: null }));
                throw new Error(error || 'Failed to send message. Please try again.');
            }

            setFormData({ name: '', email: '', message: '' });
            setStatus({ loading: false, error: null, success: true });
        } catch (error) {
            setStatus({
                loading: false,
                error: (error as Error).message,
                success: false
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-xl mx-auto lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-content/70">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={input}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-content/70">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={input}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-content/70">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="What are you building?"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className={`${input} resize-y`}
                />
            </div>
            <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-full py-3.5 px-4 font-medium text-white bg-gradient-to-r from-primary to-secondary
                shadow-lg shadow-secondary/20 hover:shadow-secondary/40 active:scale-[0.99] transition disabled:opacity-50"
            >
                {status.loading ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" className="text-sm text-center min-h-5">
                {status.error && <span className="text-rose-400">{status.error}</span>}
                {status.success && <span className="text-emerald-400">Sent. I&apos;ll get back to you by email.</span>}
            </p>
        </form>
    );
}
