function SearchBar({ searchText, setSearchText }) {
  return (
    <section>
      <h2>Find the best product easily</h2>

      <input
        type="text"
        placeholder="Search any product..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button>
        Search
      </button>

    </section>
  );
}

export default SearchBar;