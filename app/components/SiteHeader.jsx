import Link from 'next/link';
import MenuPonsel from './MenuPonsel';

const NAV = [
  ['/#isi', 'Isi struk'],
  ['/edisi', 'Arsip edisi'],
  ['/kalkulator', 'Kalkulator food cost'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-carbon/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" className="py-2 font-[family-name:var(--font-bricolage)] text-xl font-extrabold tracking-tight text-receipt">
          Tasty<span className="text-tomato-bright">Corner</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="receipt-label py-2 text-receipt/80 transition-colors hover:text-receipt">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#langganan" className="inline-flex h-11 items-center bg-tomato px-3.5 text-sm font-bold text-white hover:bg-tomato-2 sm:px-4">
            Langganan gratis
          </Link>
          <MenuPonsel tautan={NAV} />
        </div>
      </div>
    </header>
  );
}
