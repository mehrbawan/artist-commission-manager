import Link from "next/link";

const categories = [
  'Illustrations',
  'Icons',
  'Branding Visuals',
  'Stream Assets',
  '3D Models'
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#8fbfff] via-[#e78eff] via-[46.635%] to-[#ff9ea9] rounded-[40px] p-10 max-w-[90vw] w-full">
      <div className="flex flex-col gap-[59px]">
        {/* Hero Title */}
        <h1 className="text-[128px] font-bold leading-[0.801] text-black max-w-[852px]">
          By art lovers, for art lovers.
        </h1>

        {/* Content Box */}
        <div className="bg-[rgba(43,43,43,0.25)] backdrop-blur-sm rounded-[30px] p-5 border border-[#d3d3d3] flex flex-col gap-5">
          {/* Subtitle */}
          <p className="text-[32px] font-semibold leading-tight text-white max-w-[749px]">
            Your all-in-one, artist-centric platform for buying and selling commissions
          </p>

          {/* Search Bar */}
          <div className="bg-[#eee] rounded-[50px] h-[71px] flex items-center gap-3 max-w-[801px]">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by artist or service"
              className="flex-1 bg-transparent text-[24px] font-semibold text-[#939393] outline-none placeholder:text-[#939393]"
            />
          </div>

          {/* Category Tags */}
          <div className="flex gap-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-[#2b2b2b] text-[#eee] px-8 py-4 rounded-[27px] text-[24px] font-semibold hover:bg-[#3b3b3b] transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
