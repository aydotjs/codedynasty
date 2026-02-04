import "../styles/globals.css";
import "@/styles/main.css";
import Provider from "@/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Dynasty - Digital Products & Developer Training",
  description: "We build cutting-edge websites and mobile apps while empowering future developers through comprehensive training in software development, UI/UX design, and data analysis.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="has-smooth" id="has_smooth"></div>
          {children}
        </Provider>
      </body>
    </html>
  );
}