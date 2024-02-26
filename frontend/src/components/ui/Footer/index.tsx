import { GoHomeFill } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { PATHS } from "routes/paths";
import { Link } from "react-router-dom";

const footerButtons = [
  {
    id: "1",
    name: "home",
    link: PATHS.HOME,
    icon: <GoHomeFill className="footer-icon" size={30} />,
  },
  {
    id: "2",
    name: "products",
    link: PATHS.PRODUCTS,
    icon: <TiDocumentText className="footer-icon" size={30} />,
  },
  {
    id: "3",
    name: "cart",
    link: PATHS.CART,
    icon: <BsHandbag className="footer-icon" size={30} />,
  },
  {
    id: "4",
    name: "settings",
    link: PATHS.SETTINGS,
    icon: <IoSettingsOutline className="footer-icon" size={30} />,
  },
];

const Footer = () => {
  const shopCount = 5;
  return (
    <footer>
      {footerButtons.map((el) => (
        <Link key={el.id} className="footer-icon-container" to={el.link}>
          {el.icon}
          {el.name === "cart" && shopCount > 0 && (
            <div className="icon-bullet" />
          )}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
