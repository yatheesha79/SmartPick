function ProductCard({ product }) {


  const platforms = [...product.platforms].sort(
    (a, b) => a.price - b.price
  );


  const bestPlatform = platforms.reduce(
    (best, current) => {

      const bestScore =
        (best.rating || 0) * 10 - (best.price || 0) / 10000;

      const currentScore =
        (current.rating || 0) * 10 - (current.price || 0) / 10000;


      return currentScore > bestScore
        ? current
        : best;

    },
    platforms[0]
  );



  const otherPlatforms = platforms.filter(
    (platform) =>
      !(
        platform.name === bestPlatform.name &&
        platform.price === bestPlatform.price
      )
  );



  return (

    <div className="product-card">


      <h2>
        {product.name}
      </h2>



      <div className="best-choice">

        <div className="choice-title">
          🏆 SmartPick Best Choice
        </div>


        <h3>
          {bestPlatform.name}
        </h3>


        <p>
          💰 ₹{bestPlatform.price}
        </p>


        <p>
          ⭐ {bestPlatform.rating || "No rating"}
        </p>


        <a
          href={bestPlatform.link}
          target="_blank"
          rel="noreferrer"
        >
          Buy Now
        </a>


      </div>





      {
        otherPlatforms.length > 0 && (

          <>

            <h3>
              Compare Stores
            </h3>


            <div className="platform-list">


              {
                otherPlatforms.map((platform,index)=>(


                  <div
                    className="platform-card"
                    key={index}
                  >


                    <div>

                      <h4>
                        {platform.name}
                      </h4>


                      <p>
                        Price: ₹{platform.price}
                      </p>


                      <p>
                        Rating: ⭐{platform.rating || "N/A"}
                      </p>


                    </div>



                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Store
                    </a>


                  </div>


                ))
              }


            </div>


          </>

        )
      }



    </div>

  );

}


export default ProductCard;