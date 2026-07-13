import { useState } from "react";
import Recommendation from "../components/Recommendation";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import AIAssistant from "../components/AIAssistant";
import Footer from "../components/Footer";


function Home() {

  const [searchText, setSearchText] = useState("");

  return (
    <div>

      <Header />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <FilterPanel />

      <ProductList searchText={searchText} />

      <AIAssistant />

      <Recommendation />

      <Footer />

    </div>
  );
}

export default Home;