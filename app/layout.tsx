import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Licence Wallah", description: "Learn the road. Master the test." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
