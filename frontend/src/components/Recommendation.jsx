function Recommendation({ product }) {

  if (!product || !product.platforms) {
    return null;
  }


  const cheapest = [...product.platforms].sort(
    (a,b)=>a.price-b.price
  )[0];


  return (

    <div className="recommendation">

      <h2>
        🤖 SmartPick AI Recommendation
      </h2>


      <h3>
        💰 Cheapest Option
      </h3>


      <p>
        {cheapest.name}
      </p>


      <p>
        Price: ₹{cheapest.price}
      </p>


      <p>
        ⭐ {cheapest.rating || "No rating"}
      </p>


    </div>

  );

}


export default Recommendation;