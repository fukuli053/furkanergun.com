import { useTheme } from "next-themes";
import NavItem from "./NavItem";
import Link from "next/link";
import { useState, useEffect } from "react";

const MENU = {
  "/": "Home",
  "/about": "About",
  "/photos": "Photos",
  "/portfolio": "What i made?",
  "/bookmarks": "Bookmarks",
};

function Header() {
  const [showNav, setShowMenu] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="pt-10 pb-20">
      <div className="c-small">
        <div className="flex items-center justify-between">
          {/* nav-mobile-toggle */}
          <button
            className="sm:hidden"
            type="button"
            onClick={() => setShowMenu(!showNav)}
          >
            <span>{showNav ? "x" : "Menü"}</span>
          </button>
          {/* desktop nav */}
          <nav className="hidden sm:block">
            {Object.keys(MENU).map((path) => {
              return (
                <NavItem key={path} href={path}>
                  {MENU[path]}
                </NavItem>
              );
            })}
          </nav>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* nav-mobile */}
        {showNav && (
          <nav className="mt-4 flex flex-col space-y-4 sm:hidden">
            {Object.keys(MENU).map((path) => {
              return (
                <Link key={path} href={path}>
                  <a className="">{MENU[path]}</a>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
