import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-[#8fbfff] via-[#e78eff] to-[#ff9ea9] w-full rounded-[40px] max-w-[90vw]">
      <h2 className="text-5xl font-bold mb-6 text-black">
        Ready to bring your vision to life?
      </h2>
      <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">
        Commission custom artwork from talented artists or showcase your portfolio
        to clients worldwide.
      </p>
      <div className="flex gap-6 justify-center">
        <Link href="/commissions/new">
          <button className="bg-[#2b2b2b] text-[#eee] px-8 py-2.5 rounded-[27px] text-[24px] font-semibold hover:bg-[#3b3b3b] transition">
            Request artwork
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-[#eee] text-[#2b2b2b] px-8 py-2.5 rounded-[27px] text-[24px] font-semibold hover:bg-gray-100 transition border-2 border-black">
            I'm an artist
          </button>
        </Link>
      </div>
    </section>
  );
}
