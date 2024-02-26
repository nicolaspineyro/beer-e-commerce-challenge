import { TitleProps } from "src/utils/interfaces";

const Title = ({ children, type }: TitleProps) => {
  return (
    <p className={type === "main" ? "title" : "section-title"}>
        {children}
    </p>
  );
};

export default Title;
