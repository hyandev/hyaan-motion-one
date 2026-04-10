import { useState, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

import navLinks from "./navLinks";
import Logo from "../../../assets/logo.webp";
import { ButtonContainer, ButtonText } from "../MainButton";
import { MenuToggle } from "./MenuToggle";
import { cn } from "../../../lib/utils";
import { useMediaQuery } from "../../../lib/useMediaQuery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={cn("fixed z-10 w-full", "border-b border-white/20 bg-black")}
    >
      <nav
        className={cn(
          "my-container duration-300 ease-in",
          "items-center justify-between",
          "overflow-hidden py-3",
          "max-md:flex-col",
          isMobile && isOpen ? "max-h-80" : "max-h-14.5",
        )}
        aria-label="Main navigation"
      >
        <div
          className={cn("flex items-center justify-between", "max-md:w-full")}
        >
          <div className="logo w-30">
            <Link to={"/"} aria-label="Acme Corp home">
              <img src={Logo} alt="HYANX Logo " width={120} height={33} />
            </Link>
          </div>

          {isMobile && <MenuToggle isOpen={isOpen} toggle={toggleMenu} />}
        </div>

        <ul
          id="nav-list"
          className={cn(
            "items-center gap-3 md:flex",
            "grid duration-300 ease-in-out max-md:mt-3 max-md:w-full",
            isMobile && !isOpen && "pointer-events-none invisible",
          )}
          aria-hidden={isMobile ? !isOpen : false}
        >
          {navLinks.map((link) => {
            const isCta = link.variant === "cta";
            const canFocus = isMobile ? isOpen : true;

            const baseLiClasses = `text-neutral-surface flex md:h-7 md:text-sm items-center px-2.5 font-medium`;

            if (isCta) {
              return (
                <li key={link.id}>
                  <ButtonContainer
                    as="a"
                    onClick={closeMenu}
                    href={link.href}
                    className={cn(
                      "bg-primary rounded-md text-white",
                      "max-md:justify-center",
                    )}
                    tabIndex={canFocus ? 0 : -1}
                  >
                    <ButtonText>{link.name}</ButtonText>
                  </ButtonContainer>
                </li>
              );
            } else {
              return (
                <li
                  key={link.id}
                  className={`${baseLiClasses} shadow-none outline-none`}
                >
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    tabIndex={canFocus ? 0 : -1}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
