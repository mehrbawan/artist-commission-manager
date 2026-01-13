import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa6';

function Socials() {
  return (
    <div className="content-stretch flex gap-[50px] h-[20px] items-center relative shrink-0" data-name="socials">
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="Facebook">
        <FaFacebook className="size-full text-white" />
      </a>
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="Instagram">
        <FaInstagram className="size-full text-white" />
      </a>
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="X">
        <FaXTwitter className="size-full text-white" />
      </a>
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="YouTube">
        <FaYoutube className="size-full text-white" />
      </a>
    </div>
  );
}

function Appstore() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0" data-name="appstore">
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="Apple Inc">
        <FaApple className="size-full text-white" />
      </a>
      <a href="#" className="relative shrink-0 size-[30px] hover:opacity-70 transition" data-name="Google Play">
        <FaGooglePlay className="size-full text-white" />
      </a>
    </div>
  );
}

function Foot() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="foot">
      <Socials />
      <Appstore />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[14.247px] items-start relative shrink-0 w-[160.28px]">
      <div className="flex flex-col h-[56.988px] justify-center leading-[0] relative shrink-0 text-[28.494px] w-full">
        <p className="leading-[normal]">For Artists</p>
      </div>
      <div className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[17.097px] text-nowrap">
        <p className="mb-[10.685331344604492px]">How to Find Work</p>
        <p className="mb-[10.685331344604492px]">Artist Support</p>
        <p>Contract Opportunities</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[14.247px] items-start relative shrink-0 w-[160.28px]">
      <div className="flex flex-col h-[56.988px] justify-center leading-[0] relative shrink-0 text-[28.494px] w-full">
        <p className="leading-[normal]">For Clients</p>
      </div>
      <div className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[17.097px] text-nowrap">
        <p className="mb-[10.685331344604492px]">How to Commission?</p>
        <p className="mb-[10.685331344604492px]">Marketplace</p>
        <p className="mb-[10.685331344604492px]">Service Catalog</p>
        <p>Featured Artists</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14.247px] items-start relative shrink-0 w-[160.28px]">
      <div className="flex flex-col h-[56.988px] justify-center leading-[0] relative shrink-0 text-[28.494px] w-full">
        <p className="leading-[normal]">Resources</p>
      </div>
      <div className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[17.097px] text-nowrap">
        <p className="mb-[10.685331344604492px]">Blog</p>
        <p className="mb-[10.685331344604492px]">Artist's Guide</p>
        <p className="mb-[10.685331344604492px]">FAQs</p>
        <p>Why SketchQueue?</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[14.247px] items-start relative shrink-0 w-[160.28px]">
      <div className="flex flex-col h-[56.988px] justify-center leading-[0] relative shrink-0 text-[28.494px] w-full">
        <p className="leading-[normal]">Legal</p>
      </div>
      <div className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[17.097px] text-nowrap">
        <p className="mb-[10.685331344604492px]">{`Terms & Conditions`}</p>
        <p className="mb-[10.685331344604492px]">Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Figtree:SemiBold',sans-serif] font-semibold items-start justify-between relative shrink-0 text-[#eee] w-[992px]">
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Socials1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="socials">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[30px] relative size-full">
          <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eee] text-[20px] text-center text-nowrap">
            <p className="leading-[0.801]">© 2025 - 2026 SketchQueue® Global LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col gap-[30px] items-start justify-center overflow-clip p-[30px] relative rounded-[40px] shrink-0 w-[1340px]" data-name="footer">
      <Foot />
      <Frame1 />
      <Socials1 />
    </div>
  );
}