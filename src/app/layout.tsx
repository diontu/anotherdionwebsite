import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import PageSection from "@/components/page-section";
import { LINKS } from "@/app/constants";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* remove bottom border when it is finished */}
        {/* remove the background when the screen is mobile */}
        <Navigation navLinks={LINKS} />
        <main className="flex flex-col">{children}</main>
        <PageSection fitContent className="pt-10 pb-10">
          <Footer businessName="Dion" />
        </PageSection>
      </body>
    </html>
  );
}
