import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ searchText }) {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section>
      <h2>Product Results</h2>

      {
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }

    </section>
  );
}

export default ProductList;