import { Logo } from "components/icons";
import { Button } from 'components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {

    const menus = [
      { name: "Features", href: "#", submenu: true },
      { name: "Pricing", href: "#" },
      { name: "Mobile App", href: "#" },
      { name: "Help", href: "#" },
    ];


  return (
    <header className="bg-white ">
      <div className="container mx-auto lg:max-w-5xl flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <div className="flex-1 flex items-center">
          <Link
            href="/"
            aria-label="Go to home"
            className="inline-flex items-center"
          >
            <Logo className="w-10 h-10" />
            <h1 className="text-lg font-bold ml-3 hidden sm:block">
              Invoice Tracker
            </h1>
          </Link>
        </div>

        {/* Menu central */}
        <nav
          className="flex-1 flex justify-center space-x-2"
          role="navigation"
          aria-label="Main menu"
        >
          {menus.map((menu) => (
            <Button key={menu.name} variant="ghost" className="">
              <span>{menu.name}</span>
              {menu.submenu && <ChevronDown className="w-4 h-4" />}
            </Button>
          ))}
        </nav>

        {/* Botões */}
        <div className="flex-1 flex justify-end space-x-2">
          <Button variant="outline" className="cursor-pointer">
            Log In
          </Button>
          <Link href="/account" passHref>
            <Button className="cursor-pointer">Create a free account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
  