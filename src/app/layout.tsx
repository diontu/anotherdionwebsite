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
  title: "Dion Tu",
  description:
    "Discover professional web development services specializing in clean, minimalist designs. From front and backend development to exceptional UI/UX design, I offer tailored solutions that ensure your website is responsive, user-friendly, and visually appealing. Let me bring your vision to life with personalized attention and dedicated support.",
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
