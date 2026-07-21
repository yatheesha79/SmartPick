import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {
    return (
      <h2>
        Product not found
      </h2>
    );
  }


  const bestPlatform = product.platforms.reduce(
    (best, current) => {

      const bestScore =
        (best.rating * 20) - (best.price / 10000);

      const currentScore =
        (current.rating * 20) - (current.price / 10000);


      return currentScore > bestScore
        ? current
        : best;
    }
  );


  return (
    <div>

      <h1>
        {product.name}
      </h1>


      <p>
        Brand: {product.brand}
      </p>


      <p>
        Category: {product.category}
      </p>


      <h2>
        Platform Comparison
      </h2>


      {
        product.platforms.map((platform, index) => (
          <div key={index}>

            <h3>
              {platform.name}
            </h3>


            <p>
              Price: ₹{platform.price}
            </p>


            <p>
              Rating: ⭐{platform.rating}
            </p>


            <a href={platform.link}>
              Visit Store
            </a>


            <hr />

          </div>
        ))
      }



      <h2>
        SmartPick Recommendation
      </h2>


      <h3>
        Best Choice: {bestPlatform.name}
      </h3>


      <p>
        Price: ₹{bestPlatform.price}
      </p>


      <p>
        Rating: ⭐{bestPlatform.rating}
      </p>


      <p>
        SmartPick selected this based on the best balance of price and rating.
      </p>


    </div>
  );
}


export default ProductDetails;