import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Welcome to my professional portfolio showcasing my skills, projects, and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
