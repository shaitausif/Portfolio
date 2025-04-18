import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tausif's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to Google Fonts (Roboto, Inter, Fira Code) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Fira+Code:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-white min-h-screen bg-[rgb(36,36,36)] z-0 font-roboto">
        {children}
      </body>
    </html>
  );
}
