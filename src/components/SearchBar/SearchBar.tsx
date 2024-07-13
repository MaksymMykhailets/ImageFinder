import React from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { SearchBarProps } from "../App/App.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    const searchQuery = input.elements.namedItem("search") as HTMLInputElement;
    if (searchQuery.value.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSearch(searchQuery.value);
    input.reset();
  };

  return (
    <>
      <header className={styles.searchBarHeader}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </header>
      <Toaster />
    </>
  );
};

export default SearchBar;
