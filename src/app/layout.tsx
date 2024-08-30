import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densityDpi=device-dpi, minimal-ui"
        />
        <meta
          property="og:image"
          content="/public/Screenshot 2024-08-30 at 21.31.55.png"
        />
        <title>Erdenedari Ch</title>
        <meta property="og:title" content="Erdenedari Ch" />
        <meta name="description" content="Erdenedari Ch 3D Portfolio" />
        <meta property="og:description" content="Erdenedari Ch 3D Portfolio" />
        <meta
          property="og:url"
          content="https://erdenedari-portfolio-qsim.vercel.app/"
        />
      </head>
      <body style={{ backgroundColor: "#7B57B1" }}>{children}</body>
    </html>
  );
}
