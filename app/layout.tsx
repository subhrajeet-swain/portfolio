import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const description =
  "AI engineer building RAG, LLM pipelines and agentic workflows, working directly with clients to turn undefined asks into production systems.";

export const metadata: Metadata = {
  title: "Subhrajeet Swain — AI Engineer",
  description,
  icons: {
    icon: "favicon.gif",
  },
  openGraph: {
    title: "Subhrajeet Swain — AI Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
