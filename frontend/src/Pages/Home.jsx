import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ProductList from "../components/ProductList";
import AIAssistant from "../components/AIAssistant";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>

      <Header />

      <SearchBar />

      <FilterPanel />

      <ProductList />

      <AIAssistant />

      <Footer />

    </div>
  );
}

export default Home;