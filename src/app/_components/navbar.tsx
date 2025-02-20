"use client";

import { Button } from "@/components/ui/button";
import { Github, Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#commands", label: "Commands" },
  { href: "#installation", label: "Installation" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for the navbar

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-powershell-text/10 bg-powershell-bg/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Terminal className="size-6 text-powershell-text animate-pulse" />
          <span className="font-bold text-powershell-text text-lg [text-shadow:0_0_10px_#EFB571] inline-block">
            psnm
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-powershell-command [text-shadow:0_0_10px_#EFB571]"
                  : "text-powershell-text/70 hover:text-powershell-text"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-powershell-command to-transparent [box-shadow:0_0_10px_#EFB571]" />
              )}
            </a>
          ))}
          <Button
            variant="outline"
            className="gap-2 border-powershell-text/20 hover:bg-powershell-text/10 hover:border-powershell-command hover:[box-shadow:0_0_15px_rgba(239,181,113,0.3)]"
            asChild
          >
            <a
              href="https://github.com/gustavorizzon/psnm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              <span className="hidden lg:inline-block">View on GitHub</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-powershell-text/70 hover:text-powershell-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-powershell-text/10 bg-powershell-bg/95 backdrop-blur-md">
          <div className="container py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-powershell-command [text-shadow:0_0_10px_#EFB571]"
                    : "text-powershell-text/70"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="gap-2 border-powershell-text/20 hover:bg-powershell-text/10"
              asChild
            >
              <a
                href="https://github.com/gustavorizzon/psnm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
