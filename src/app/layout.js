import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Rzeczoznawca Majątkowy",
  description: "Wycena Nieruchomości Nowy Targ Natalia Bełtowska",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
