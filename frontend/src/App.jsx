import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <div>
      <Header />

     <SearchBar />


      <ProductCard />
      <ProductCard />


      {/* AI Assistant Section */}
      <section>
        <h2>SmartPick AI Assistant</h2>

        <p>
          Tell your budget and requirements.
          AI will help you choose.
        </p>

      </section>


      {/* Food Module */}
      <section>
        <h2>Food Comparison</h2>

        <p>
          Compare food options and prices.
        </p>

      </section>


    </div>
  )
}

export default App