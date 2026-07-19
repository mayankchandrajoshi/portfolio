import type { Metadata, Viewport } from 'next'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mjmj.vercel.app"),
  themeColor: '#000000',

  title: {
    default: "Mayank Chandra Joshi | Full Stack Developer",
    template: "%s | Mayank Chandra Joshi",
  },

  description:
    "Portfolio of Mayank Chandra Joshi (Mayank Joshi), a Full Stack Developer specializing in React Native, React, Next.js, Node.js, TypeScript, and modern web technologies.",

  applicationName: "Mayank Chandra Joshi",
  manifest: "/images/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  formatDetection: {
    telephone: false,
  },

  keywords: [
    "Mayank Chandra Joshi",
    "Mayank Joshi",
    "Mayank",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Native",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Mayank Chandra Joshi",
    },
  ],

  creator: "Mayank Chandra Joshi",
  publisher: "Mayank Chandra Joshi",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "00sznMsAEA8dy8_sQgWbCwFM_V79UQojKGTp7RB8tAI",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mjmj.vercel.app",
    siteName: "Mayank Chandra Joshi",
    title: "Mayank Chandra Joshi | Full Stack Developer",
    description:
      "Portfolio of Mayank Chandra Joshi (Mayank Joshi), Full Stack Developer.",
    images: [
      {
        url: "/images/profile_pic.png",
        alt: "Mayank Chandra Joshi portfolio image",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mayank Chandra Joshi | Full Stack Developer",
    description:
      "Portfolio of Mayank Chandra Joshi (Mayank Joshi), Full Stack Developer.",
    images: ["/images/profile_pic.png"],
    creator: "@mayankjoshi9871",
    site: "@mayankjoshi9871",
  },

  icons: {
    icon: [
      {
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/images/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/images/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/images/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/images/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/images/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/images/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/images/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/images/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/images/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "manifest",
        url: "/images/manifest.json",
      },
    ],
  },

  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/images/ms-icon-144x144.png",
  },
};
      

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "url": "https://portfolio-mjmj.vercel.app",
                  "name": "Mayank Chandra Joshi",
                  "publisher": {
                    "@type": "Person",
                    "name": "Mayank Chandra Joshi",
                  },
                },
                {
                  "@type": "Person",
                  "name": "Mayank Chandra Joshi",
                  "url": "https://portfolio-mjmj.vercel.app",
                  "sameAs": [
                    "https://www.linkedin.com/in/mayank-chandra-joshi",
                    "https://github.com/mayankchandrajoshi/",
                    "https://x.com/mayankjoshi9871",
                    "https://www.instagram.com/mayank.joshi23"
                  ]
                },
              ],
            }),
          }}
        />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}


