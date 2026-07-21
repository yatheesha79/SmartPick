import ImageSearch from "../components/ImageSearch";
import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import Recommendation from "../components/Recommendation";
import AIAssistant from "../components/AIAssistant";
import Footer from "../components/Footer";


function Home() {

  const [searchText,setSearchText] = useState(
    localStorage.getItem("lastSearch") || ""
  );

  const [sortType,setSortType] = useState("");

  const [selectedBrand,setSelectedBrand] = useState("");

  const [maxPrice,setMaxPrice] = useState("");

  const [recommendation,setRecommendation] = useState(null);


  function handleSearch(value){

    setSearchText(value);

    localStorage.setItem(
      "lastSearch",
      value
    );

  }


  return (

    <div>

      <Header />

      <SearchBar
        searchText={searchText}
        setSearchText={handleSearch}
      />


      <FilterPanel
        sortType={sortType}
        setSortType={setSortType}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />


      <ProductList
        searchText={searchText}
        sortType={sortType}
        selectedBrand={selectedBrand}
        maxPrice={maxPrice}
        setRecommendation={setRecommendation}
      />


      {
        searchText.trim() === "" &&

        <div className="feature-container">

          <Recommendation
            product={recommendation}
          />

          <AIAssistant />

          <ImageSearch />

        </div>
      }


      <Footer />

    </div>

  );

}


export default Home;