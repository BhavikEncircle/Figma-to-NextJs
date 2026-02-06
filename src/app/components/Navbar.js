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
    <nav className="absolute top-0 left-0 w-full h-28 bg-black/50 flex justify-between items-center gap-10 px-10 pt-5 z-50">
      <Image
        src="/logo1 2.png"
        alt="Logo"
        width={300}
        height={100}
        className="w-auto h-18 object-contain"
      />
      <ul className="flex items-center gap-8 h-full">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="group relative flex items-center mx-5 gap-2 h-full cursor-pointer text-white text-xl tracking-widest font-medium"
          >
            <span className="group-hover:text-gray-300 transition-colors">
              {link.name}
            </span>
            {link.hasArrow && <DropdownArrow />}

            {link.subMenu && (
              <ul className="absolute top-24 left-0 w-48 bg-white/20 text-black shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
    </nav>
  );
};
