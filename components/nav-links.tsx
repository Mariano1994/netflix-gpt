import Link from "next/link";

const links = [
  {
    id: crypto.randomUUID(),
    label: "Home",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "Tv Shows",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "Movies",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "Games",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "Latest",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "My List",
    href: "#",
  },

  {
    id: crypto.randomUUID(),
    label: "Broswe by Language",
    href: "#",
  },
];

export async function NavLinks() {
  return (
    <div className="flex items-center gap-6 text-sm">
      {links.map((link) => (
        <Link key={link.id} href={link.href} className="hover:brightness-80">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
