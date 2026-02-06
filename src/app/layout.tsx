import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bala Shiva Teja Kandimalla — Sr. React / Node.js Developer",
  description:
    "Portfolio of Bala Shiva Teja Kandimalla, a Senior React and Node.js Developer with 10+ years of MERN/MEAN stack experience building scalable web applications.",
  keywords: [
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "MERN Stack",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
