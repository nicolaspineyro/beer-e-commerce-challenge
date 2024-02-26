import { Title } from "components/ui";
import { SectionHeaderProps } from "src/utils/interfaces";

const SectionHeader = ({
  showAllButton,
  onButtonPress,
  children,
}: SectionHeaderProps) => {
  return (
    <div className="section-header-container">
      <Title type="section">{children}</Title>
      {showAllButton && (
        <p className="see-all-button" onClick={onButtonPress}>
          See All
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
