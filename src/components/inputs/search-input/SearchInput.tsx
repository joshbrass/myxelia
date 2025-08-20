import React from "react";
import styles from "./SearchInput.module.css";
import searchIcon from '../../../assets/svg/search-icon.svg'

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <img src={searchIcon} alt="" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
