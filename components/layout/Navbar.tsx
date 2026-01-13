function NavLinks() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between leading-[0] relative shrink-0 text-center text-nowrap w-[876px]" data-name="nav links">
      <div className="flex flex-col font-['Outfit:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[32px] text-white">
        <p className="leading-[0.801]">SketchQueue</p>
      </div>
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black">
        <p className="leading-[0.801]">Commissions</p>
      </div>
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black">
        <p className="leading-[0.801]">Artists</p>
      </div>
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black">
        <p className="leading-[0.801]">Marketplace</p>
      </div>
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black">
        <p className="leading-[0.801]">Community</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center justify-center px-[30px] py-[15px] relative rounded-[27px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#eee] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Login</p>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#8fbfff] items-center justify-center px-[30px] py-[15px] relative rounded-[27px] shrink-0 to-[#ff9ea9] via-[#e78eff] via-[46.635%]" data-name="signup">
      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b2b] text-[24px] text-center text-nowrap">
        <p className="leading-[0.801]">Sign Up</p>
      </div>
    </div>
  );
}


function Frame5() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
      <Login />
      <Signup />
    </div>
  );
}


export default function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] py-[20px] relative shrink-0 w-[1439px]" data-name="nav">
      <NavLinks />
      <Frame5 />
    </div>
  );
}
