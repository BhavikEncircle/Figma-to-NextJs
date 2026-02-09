import Image from "next/image";
import { DropdownArrow, SearchIcon } from "./Icons";
export const Navbar = () => {
  const navLinks = [
    { name: "Home", hasArrow: false },
    { name: "About", hasArrow: false },
    { name: "Package", hasArrow: true, subMenu: ["Family Plans", "Honeymoon"] },
    {
      name: "Destination",
      hasArrow: true,
      subMenu: ["Dubai", "Switzerland", "Bali", "Spain"],
    },
    { name: "Blog", hasArrow: false },
    { name: "Contact", hasArrow: false },
  ];
  return (
    <nav className="absolute top-0 left-0 w-full bg-black/50 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <Image
          src="/logo1 2.png"
          alt="Logo"
          width={220}
          height={70}
          className="w-auto h-10 object-contain"
        />

       
        <details className="md:hidden text-white">
          <summary className="list-none cursor-pointer text-2xl">☰</summary>
          <ul className="mt-3 bg-black/90 p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{link.name}</span>
                  {link.hasArrow && <DropdownArrow />}
                </div>
                {link.subMenu && (
                  <ul className="mt-2 ml-4 text-sm text-gray-200 space-y-1">
                    {link.subMenu.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <SearchIcon />
            </li>
          </ul>
        </details>

     
        <ul className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="group relative flex items-center mx-2 gap-2 h-full cursor-pointer text-white text-lg tracking-widest font-medium"
            >
              <span className="group-hover:text-gray-300 transition-colors">
                {link.name}
              </span>
              {link.hasArrow && <DropdownArrow />}

              {link.subMenu && (
                <ul className="absolute top-12 left-0 w-48 bg-white/20 text-black shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {link.subMenu.map((sub) => (
                    <li
                      key={sub}
                      className="px-5 py-3 hover:bg-gray-100 transition-colors first:pt-5 last:rounded-b-md"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="cursor-pointer pb-1 text-xl hover:scale-110 transition-transform ml-4">
            <SearchIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};
