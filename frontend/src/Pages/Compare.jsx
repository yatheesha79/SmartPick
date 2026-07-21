import { useState } from "react";


function Compare(){

  const user = JSON.parse(localStorage.getItem("user"));

  const compareKey = user
    ? `compareProducts_${user.username}`
    : "compareProducts_guest";


  const [products,setProducts] = useState(

    JSON.parse(
      localStorage.getItem(compareKey)
    ) || []

  );



  function removeProduct(id){

    const updated = products.filter(

      product => product.id !== id

    );


    setProducts(updated);


    localStorage.setItem(

      compareKey,

      JSON.stringify(updated)

    );

  }





  function clearCompare(){

    localStorage.removeItem(compareKey);

    setProducts([]);

  }






  return (

    <div className="compare-page">


      <h1>
        ⚖ SmartPick Compare
      </h1>


      <p>
        Compare prices, ratings and platforms.
      </p>



      {
        products.length === 0 ?

        (

          <div className="compare-box">

            <h2>
              No products added
            </h2>

            <p>
              Add products from search results to compare.
            </p>

          </div>

        )

        :

        (

          <div

            className="compare-box"

            style={{

              width:"100%",

              maxWidth:"1200px"

            }}

          >

            <h2>
              Product Comparison
            </h2>


            <div

              style={{

                display:"grid",

                gridTemplateColumns:"repeat(3, 1fr)",

                gap:"25px",

                marginTop:"25px",

                width:"100%"

              }}

            >

              {

                products.map((product)=>{

                  const bestPlatform =

                  [...product.platforms].sort(

                    (a,b)=>a.price-b.price

                  )[0];


                  return (

                    <div

                      key={product.id}

                      style={{

                        padding:"20px",

                        border:"1px solid #ddd",

                        borderRadius:"15px",

                        background:"#fff",

                        minHeight:"260px"

                      }}

                    >

                      <h2>
                        {product.name}
                      </h2>

                      <p>
                        💰 Best Price:
                        ₹{bestPlatform.price}
                      </p>

                      <p>
                        🏪 Store:
                        {bestPlatform.name}
                      </p>

                      <p>
                        ⭐ Rating:
                        {bestPlatform.rating || "N/A"}
                      </p>

                      <a

                        href={bestPlatform.link}

                        target="_blank"

                        rel="noopener noreferrer"

                        style={{

                          display:"inline-block",

                          marginTop:"15px",

                          padding:"10px 20px",

                          background:"#2563eb",

                          color:"white",

                          textDecoration:"none",

                          borderRadius:"10px"

                        }}

                      >

                        🛒 View Product

                      </a>


                      <button

                        onClick={()=>removeProduct(product.id)}

                        style={{

                          marginTop:"15px",

                          marginLeft:"10px",

                          padding:"10px 20px",

                          borderRadius:"10px",

                          border:"none",

                          cursor:"pointer"

                        }}

                      >

                        Remove

                      </button>

                    </div>

                  );

                })

              }

            </div>


            <button

              onClick={clearCompare}

              style={{

                marginTop:"30px",

                padding:"12px 20px",

                borderRadius:"10px",

                cursor:"pointer"

              }}

            >

              Clear Comparison

            </button>

          </div>

        )

      }

    </div>

  );

}


export default Compare;