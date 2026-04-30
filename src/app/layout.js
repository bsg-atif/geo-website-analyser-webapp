import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryClientProvider from "@shared/components/providers/ReactQueryProvider";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WaledAnalysis",
  description:
    "An AI-powered webapp used to analyse the quality and provide metrics of a website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
