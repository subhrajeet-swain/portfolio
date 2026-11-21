import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const description =
  "AI engineer building RAG, LLM parsing pipelines and agentic workflows, and the forward-deployed engineer who sits with the client to scope them.";

export const metadata: Metadata = {
  title: "Subhrajeet Swain — AI Engineer",
  description,
  openGraph: {
    title: "Subhrajeet Swain — AI Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${mono.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
