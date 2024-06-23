import "~/styles/globals.css";
import { Manrope } from "next/font/google";

import Header from "~/components/Header";

export const metadata = {
  title: "Multiflex",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body className="flex flex-col items-center">
        <div className="w-[1240px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
