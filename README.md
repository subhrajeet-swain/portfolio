# subhrajeet-swain/portfolio

Personal site. Next.js 16, Tailwind 3, deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:3000
```

All page copy lives in `content.ts`. The résumé served at `/subhrajeet-resume.pdf` is in `public/`.

The contact form posts to `app/api/contact` and sends mail through Resend. It needs these env vars:

```
RESEND_API_KEY=
FROM_EMAIL=        # a sender on your verified Resend domain
TO_EMAIL=          # where messages land
```

Input validation test: `node --experimental-strip-types --test app/api/contact/validate.test.ts`
