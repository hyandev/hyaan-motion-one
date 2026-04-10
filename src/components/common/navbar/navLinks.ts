type NavVariant = "cta" | "default";

type NavLink = {
  id: number;
  name: string;
  href: string;
  variant?: NavVariant;
};

const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Blog", href: "/blog" },
  { id: 4, name: "Contact", href: "/contact" },
  { id: 5, name: "Book a call", href: "/", variant: "cta" },
];

export default navLinks;
