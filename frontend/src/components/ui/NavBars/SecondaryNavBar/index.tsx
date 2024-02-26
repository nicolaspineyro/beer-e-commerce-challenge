import { IoIosArrowRoundBack, IoIosMore } from "react-icons/io";
import { Title } from "components/ui";
import { useNavigate } from "react-router-dom";
import { SecondaryNavBarProps } from "src/utils/interfaces";

const SecondaryNavBar = ({ title }: SecondaryNavBarProps) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <nav>
      <div onClick={handleBack} className="icon-container">
        <IoIosArrowRoundBack size={24} />
      </div>
      <Title type={"section"}>{title}</Title>
      <div className="icon-container">
        <IoIosMore size={24} />
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
