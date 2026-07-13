function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>

      <p>
        Brand: {product.brand}
      </p>

      <h3>Available Platforms</h3>

      {
        product.platforms.map((platform, index) => (
          <div key={index}>
            <p>
              {platform.name}
            </p>

            <p>
              Price: ₹{platform.price}
            </p>

            <p>
              ⭐ Rating: {platform.rating}
            </p>

            <a href={platform.link}>
              Visit Store
            </a>

            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default ProductCard;