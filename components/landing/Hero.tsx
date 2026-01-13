import Link from "next/link";

function Search() {
  return (
    <div className="bg-[#eee] content-stretch flex gap-[12px] h-[71px] items-center px-[25px] py-[11px] relative rounded-[50px] shrink-0 w-[801px]" data-name="search">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Search">
      </div>
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#939393] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Search by artist or service</p>
      </div>
    </div>
  );
}

function Login1() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Illustrations</p>
      </div>
    </div>
  );
}

function Login2() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Icons</p>
      </div>
    </div>
  );
}

function Login3() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Branding Visuals</p>
      </div>
    </div>
  );
}

function Login4() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Stream Assets</p>
      </div>
    </div>
  );
}

function Login5() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">3D Models</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
      <Login1 />
      <Login2 />
      <Login3 />
      <Login4 />
      <Login5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(43,43,43,0.25)] content-stretch flex flex-col gap-[40px] items-start p-[40px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[32px] text-black w-[749px]">
        <p className="leading-[0.801]">Your all-in-one, artist-centric platform for buying and selling commissions</p>
      </div>
      <Search />
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[59px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Outfit:Bold',sans-serif] font-bold h-[221px] justify-center leading-[0] relative shrink-0 text-[128px] text-black w-[852px]">
        <p className="leading-[0.801]">By art lovers, for art lovers.</p>
      </div>
      <Frame7 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#8fbfff] items-start justify-center p-[40px] relative rounded-[40px] shrink-0 to-[#ff9ea9] via-[#e78eff] via-[46.635%] w-[1323px]" data-name="hero">
      <Frame6 />
    </div>
  );
}


function test() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-bold leading-tight max-w-3xl mx-auto">
        Commissions, simplified for artists and clients
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
        Open commissions, manage requests, accept payments, and deliver art —
        all in one clean platform.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Link href="/commissions/new">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
            Discover Artists
          </button>
        </Link>
        <Link href="/login">
          <button className="border border-gray-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            Join as an Artist
          </button>
        </Link>
      </div>
    </section>
  );
}
