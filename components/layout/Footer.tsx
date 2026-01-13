import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa6';

const socialLinks = [
  { Icon: FaFacebook, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaXTwitter, href: '#', label: 'X' },
  { Icon: FaYoutube, href: '#', label: 'YouTube' },
];

const appStoreLinks = [
  { Icon: FaApple, href: '#', label: 'App Store' },
  { Icon: FaGooglePlay, href: '#', label: 'Google Play' },
];

const footerLinks = [
  {
    title: 'For Artists',
    links: ['How to Find Work', 'Artist Support', 'Contract Opportunities'],
  },
  {
    title: 'For Clients',
    links: ['How to Commission?', 'Marketplace', 'Service Catalog', 'Featured Artists'],
  },
  {
    title: 'Resources',
    links: ['Blog', "Artist's Guide", 'FAQs', 'Why SketchQueue?'],
  },
  {
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] max-w-[1340px] w-full flex flex-col gap-8 p-8 rounded-[40px] text-gray-200">
      {/* Social & App Links */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-12 items-center">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 hover:opacity-70 transition"
            >
              <Icon className="w-full h-full" />
            </a>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          {appStoreLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 hover:opacity-70 transition"
            >
              <Icon className="w-full h-full" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-between max-w-[992px] w-full font-semibold">
        {footerLinks.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-4">
            <h3 className="text-[28px] mb-2">{title}</h3>
            <ul className="flex flex-col gap-3 text-[17px]">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full text-center">
        <p className="text-xl">© 2025 - 2026 SketchQueue® Global LLC</p>
      </div>
    </footer>
  );
}