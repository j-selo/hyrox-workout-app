import './globals.css'; // Importing global styles here
import { Outfit } from "next/font/google";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: outfitFont.style.fontFamily }}>
        {/* Layout UI */}
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
          <div className="font-bold"></div>
          <div className="flex gap-4">
            {/* <Link href="/" className={pathname === '/' ? 'text-blue-400' : ''}>Home</Link>
            <Link href="/about" className={pathname === '/about' ? 'text-blue-400' : ''}>About</Link> */}
          </div>
        </nav>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}