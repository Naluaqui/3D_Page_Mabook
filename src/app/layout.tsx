import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apple",
  description: "Starter Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>

        {children}

        <footer className="footer">
          <span className="footerSignature">Ana Luiza Tibiriçá da Paixão</span>

          <div className="footerLinks">
            <a
              href="https://www.linkedin.com/in/ana-luiza-tibirica-da-paixao/"
              target="_blank"
              rel="noopener noreferrer"
              className="footerImageLink"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="footerImage"
              />
            </a>

            <a
              href="https://github.com/Naluaqui"
              target="_blank"
              rel="noopener noreferrer"
              className="footerImageLink"
            >
              <img
                src="/assets/github.png"
                alt="GitHub"
                className="footerImage"
              />
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}