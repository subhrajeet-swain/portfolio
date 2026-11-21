const LIMITS = { name: 100, email: 200, message: 5000 } as const;

export type ContactMessage = { name: string; email: string; message: string };

export function escapeHtml(s: string) {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Returns the cleaned message, or an error string for the client.
export function validate(body: unknown): ContactMessage | string {
    const b = (body ?? {}) as Record<string, unknown>;
    const out = {} as ContactMessage;
    for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
        const v = typeof b[key] === 'string' ? (b[key] as string).trim() : '';
        if (!v) return `Please fill in your ${key}.`;
        if (v.length > LIMITS[key]) return `Your ${key} is too long.`;
        out[key] = v;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/.test(out.email)) return 'That email address looks wrong.';
    return out;
}
