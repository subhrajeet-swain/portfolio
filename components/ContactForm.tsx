'use client';
import { useState } from 'react';

const field =
    'mt-2 block w-full border-0 border-b border-rule bg-transparent px-0 py-2 text-lg text-ink ' +
    'placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0';
const label = 'font-mono text-xs uppercase tracking-[0.14em] text-muted';

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
        <form onSubmit={handleSubmit} className="mt-10 max-w-[42rem] space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={field}
                    />
                </div>
                <div>
                    <label htmlFor="email" className={label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={field}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className={label}>Message</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className={`${field} resize-y`}
                />
            </div>
            <div className="flex flex-wrap items-center gap-6">
                <button
                    type="submit"
                    disabled={status.loading}
                    className="border border-ink px-6 py-2.5 font-mono text-sm transition-colors
                    hover:border-accent hover:bg-accent hover:text-paper disabled:opacity-50"
                >
                    {status.loading ? 'Sending…' : 'Send message'}
                </button>
                <p role="status" className="font-mono text-sm">
                    {status.error && <span className="text-accent">{status.error}</span>}
                    {status.success && <span className="text-muted">Sent. I&apos;ll reply by email.</span>}
                </p>
            </div>
        </form>
    );
}
