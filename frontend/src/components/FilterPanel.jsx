function FilterPanel({
  sortType,
  setSortType,
  selectedBrand,
  setSelectedBrand,
  maxPrice,
  setMaxPrice
}) {

  return (

    <div className="filter-panel">

      <select
        value={sortType}
        onChange={(e)=>setSortType(e.target.value)}
      >

        <option value="">
          Sort By
        </option>

        <option value="low">
          Lowest Price
        </option>

        <option value="high">
          Highest Price
        </option>

      </select>


      <input
        type="text"
        placeholder="Brand"
        value={selectedBrand}
        onChange={(e)=>setSelectedBrand(e.target.value)}
      />


      <input
        type="number"
        placeholder="Maximum Price"
        value={maxPrice}
        onChange={(e)=>setMaxPrice(e.target.value)}
      />


    </div>

  );

}

export default FilterPanel;