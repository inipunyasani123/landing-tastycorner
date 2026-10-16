import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/footer/Footer";
import "./globals.css";

// Tanggal edisi di lib/struk.js dihitung dari Senin terakhir; bangun ulang sekali sehari.
export const revalidate = 86400;

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "600"] });

const __jsonld = {"@context":"https://schema.org","@type":"Periodical","name":"Struk Mingguan — Tasty Corner","description":"Buletin angka mingguan untuk usaha makanan dan minuman kecil","url":"https://landing-tastycorner.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-tastycorner.pintuweb.id"),
  title: { default: "Tasty Corner — Struk Mingguan untuk Usaha Makanan", template: "%s — Tasty Corner" },
  description: "Struk Mingguan Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe. Satu menu dibedah sampai rupiah terakhir, plus kalkulator food cost.",
  applicationName: "Tasty Corner",
  keywords: ["buletin usaha makanan", "food cost", "hpp menu", "kalkulator food cost", "harga menu online"],
  authors: [{ name: "Tasty Corner" }],
  creator: "Tasty Corner",
  publisher: "Tasty Corner",
  alternates: { canonical: "https://landing-tastycorner.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-tastycorner.pintuweb.id",
    siteName: "Tasty Corner",
    title: "Tasty Corner — Struk Mingguan untuk Usaha Makanan",
    description: "Struk Mingguan Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe. Satu menu dibedah sampai rupiah terakhir, plus kalkulator food cost.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tasty Corner — Struk Mingguan untuk Usaha Makanan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasty Corner — Struk Mingguan untuk Usaha Makanan",
    description: "Struk Mingguan Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe. Satu menu dibedah sampai rupiah terakhir, plus kalkulator food cost.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-tomato-2 focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=tastycorner" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
