import Link from 'next/link';
import { EDISI } from '@/lib/struk';

export default function Footer() {
  return (
    <footer className="bg-carbon px-6 text-receipt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-[family-name:var(--font-bricolage)] text-2xl font-extrabold">Tasty<span className="text-tomato-bright">Corner</span></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-receipt/80">Struk Mingguan: buletin angka untuk usaha makanan dan minuman kecil. Terbit tiap Senin, gratis.</p>
        </div>
        <nav aria-label="Edisi terbaru">
          <p className="receipt-label mb-4 text-tomato-bright">Edisi terbaru</p>
          <ul className="space-y-1 text-sm text-receipt/80">
            {EDISI.slice(0, 3).map((e) => <li key={e.slug}><Link href={`/edisi/${e.slug}`} className="inline-block py-1.5 hover:text-receipt">#{e.nomor} · {e.judul}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Alat">
          <p className="receipt-label mb-4 text-tomato-bright">Alat</p>
          <ul className="space-y-1 text-sm text-receipt/80">
            <li><Link href="/kalkulator" className="inline-block py-1.5 hover:text-receipt">Kalkulator food cost</Link></li>
            <li><Link href="/edisi" className="inline-block py-1.5 hover:text-receipt">Arsip edisi</Link></li>
            <li><Link href="/#langganan" className="inline-block py-1.5 hover:text-receipt">Langganan</Link></li>
          </ul>
        </nav>
      </div>
      <p className="receipt-label mx-auto max-w-6xl border-t border-receipt/15 py-6 leading-[1.8] text-receipt/70">
        © 2026 Tasty Corner · Semua harga dan angka di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
