import Link from "next/link";
import { Button } from "../ui/button";

import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-8  bg-white border-b-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-5xl font-extrabold text-accent capitalize">
            creativity
          </h1>
        </Link>

        {/* desktop  nav & hire me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile  nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
      <br />
    </header>
  );
};

export default Header;
