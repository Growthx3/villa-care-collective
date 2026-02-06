import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Villa Care Collective | Estate Stewardship & Engineering",
    description: "A premium technical estate management collective for luxury villas. Specialized in aquatic engineering, MEP systems, building envelope, and maritime resilience.",
    openGraph: {
        type: "website",
        title: "Villa Care Collective | Estate Stewardship & Engineering",
        description: "Premium property maintenance and technical audit services for luxury estates.",
        images: ["/heroimage.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Villa Care Collective",
        description: "Engineering the art of effortless ownership.",
        images: ["/heroimage.png"],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                {/* Google Tag (gtag.js) */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2M6V79H761');
          `}
                </Script>
            </head>
            <body className="antialiased font-inter">
                <div className="noise-overlay" />
                {children}
            </body>
        </html>
    );
}
