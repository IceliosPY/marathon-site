import { NavLink } from "react-router-dom";

type NavItem = {
  to: string;
  label: string;
  tone: "home" | "guides" | "shells" | "maps" | "items";
};

const navItems: NavItem[] = [
  { to: "/", label: "Accueil", tone: "home" },
  { to: "/guides", label: "Guides", tone: "guides" },
  { to: "/shells", label: "Shells", tone: "shells" },
  { to: "/maps", label: "Maps", tone: "maps" },
  { to: "/items", label: "Items", tone: "items" },
];

export default function Nav() {
  return (
    <header className="navShell">
      <div className="navBar">
        <div className="navBar__spacer" />

        <nav className="navBar__center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navBar__link navBar__link--${item.tone}${
                  isActive ? " is-active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navStatus">
          <span className="navStatus__line">
            OPENING CONNECTION
          </span>

          <span className="navStatus__line navStatus__line--dim">
            ß.4.5-23 / 6142.a5.09.1307
          </span>
        </div>
      </div>
    </header>
  );
}