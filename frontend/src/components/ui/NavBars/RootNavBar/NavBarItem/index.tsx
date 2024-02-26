import { Link } from "react-router-dom";

import { MenuItemProps } from "src/utils/interfaces";

const NavBarItem = ({ label, id, link }: MenuItemProps) => {
  return (
    <li>
      <Link className={`navbar-link`} key={id} to={link}>
        {label}
      </Link>
    </li>
  );
};

export default NavBarItem;
