import { Outfit } from "next/font/google";

import "./globals.css";

import { Toaster } from "sonner";

import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Fusion",
  description: "Your very own smart wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} w-screen overflow-x-hidden bg-gray-50`}
      >
        <ThemeProvider attribute="class">
          <Toaster
            position="bottom-center"
            richColors
            closeButton
            toastOptions={{
              className: "flex items-center justify-center",
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
