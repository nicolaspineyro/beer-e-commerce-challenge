import { PATHS } from "routes/paths";
import { HiBars3CenterLeft } from "react-icons/hi2";

import NavBarItem from "components/ui/NavBars/RootNavBar/NavBarItem";
import Avatar from "components/ui/Avatar";

import { useLocation } from "react-router-dom";

export const MENU_ITEMS = [
  { id: "menu-item-1", label: "Home", link: PATHS.HOME },
  { id: "menu-item-2", label: "Products", link: PATHS.PRODUCTS },
  { id: "menu-item-3", label: "Cart", link: PATHS.CART },
  { id: "menu-item-4", label: "Settings", link: PATHS.SETTINGS },
];

const RootNavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <div className="icon-container">
        <HiBars3CenterLeft size={25} />
      </div>

      <ul className="menu-container">
        {MENU_ITEMS.map((item) => (
          <NavBarItem key={item.id} currentPath={pathname} {...item} />
        ))}
      </ul>
      <Avatar width={50} height={50} imageUrl="avatar.jpg" />
    </nav>
  );
};

export default RootNavBar;
