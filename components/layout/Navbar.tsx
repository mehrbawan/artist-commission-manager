import Link from 'next/link';

const navLinks = ['Commissions', 'Artists', 'Marketplace', 'Community'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-8 py-5 w-full h-[10vh]">
      {/* Logo + Nav Links */}
      <div className="flex items-center gap-12">
        <Link href="/" className="font-extrabold text-[32px] text-white [-webkit-text-stroke:10px_black] [paint-order:stroke_fill]">
          SketchQueue
        </Link>
        
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-[24px] font-semibold text-black hover:text-gray-600 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-6">
        <Link href="/login">
          <button className="bg-[#2b2b2b] text-[#eee] px-8 py-2.5 rounded-[27px] text-[24px] font-semibold hover:bg-[#3b3b3b] transition">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-gradient-to-r from-[#8fbfff] via-[#e78eff] to-[#ff9ea9] text-[#2b2b2b] px-8 py-2.5 rounded-[27px] text-[24px] font-semibold hover:opacity-90 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
