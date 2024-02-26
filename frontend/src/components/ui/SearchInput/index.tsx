import { BsSearch } from "react-icons/bs";

const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <div className="search-input-container">
      <BsSearch className="search-icon" />
      <input type="search" className="search-input" {...rest} />
    </div>
  );
};

export default SearchInput;
