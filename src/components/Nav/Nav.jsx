import { NavList, NavItem, NavLink } from "./Nav.styled";
import { navLinks } from "../../data/template";

export const Nav = () => {
  return (
    <NavList>
      {navLinks.map((navLink) => (
        <NavItem key={navLink.id}>
          <NavLink href={navLink.link}>{navLink.page}</NavLink>
        </NavItem>
      ))}
    </NavList>
  );
};
