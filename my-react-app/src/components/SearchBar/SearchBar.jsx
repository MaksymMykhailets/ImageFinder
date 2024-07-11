import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target;
    const searchQuery = input.elements.search.value;
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(searchQuery);
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
