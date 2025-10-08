import { ThemeProvider } from "components/theme-provider";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Invoice Tracker | Home";
const description =
  "Invoice Tracker is a simple and efficient app to create, organize, and manage your invoices all in one place.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bmrk.cc"),
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    site: "@gokul_i",
    description,
    creator: "@gokul_i",
    images: [
      {
        type: "image/jpeg",
        url: "/images/og.jpg",
        width: 1920,
        height: 1080,
        alt: "Bookmark it.",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Bookmark it.",
    title,
    description,
    url: "https://bmrk.cc",
    images: [
      {
        type: "image/jpeg",
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bookmark it.",
      },
    ],
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    title,
    statusBarStyle: "default",
    startupImage: ["/icons/apple-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
