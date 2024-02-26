import { ReactNode } from "react";

export default interface SectionHeaderProps {
  onButtonPress?: () => void;
  showAllButton?: boolean;
  children: ReactNode;
}
