import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductList({

  searchText,

  sortType,

  selectedBrand,

  maxPrice,

  setRecommendation

}) {


  const [products,setProducts] = useState([]);

  const [loading,setLoading] = useState(false);

  const [compareMessage,setCompareMessage] = useState("");




  function addToCompare(product){

    const user = JSON.parse(localStorage.getItem("user"));

    const compareKey = user
      ? `compareProducts_${user.username}`
      : "compareProducts_guest";


    let compareProducts = JSON.parse(

      localStorage.getItem(compareKey)

    ) || [];


    const alreadyAdded = compareProducts.find(

      item => item.id === product.id

    );


    if(!alreadyAdded){

      compareProducts.push(product);

      localStorage.setItem(

        compareKey,

        JSON.stringify(compareProducts)

      );

      setCompareMessage("✅ Product added to compare");

    }
    else{

      setCompareMessage("⚠ Product already added");

    }


    setTimeout(()=>{

      setCompareMessage("");

    },3000);

  }






  useEffect(()=>{


    if(!searchText){

      setProducts([]);

      return;

    }



    async function searchProducts(){

      try{

        setLoading(true);

        const response = await fetch(

          `http://localhost:5000/search?q=${searchText}`

        );

        const data = await response.json();

        if(data.products){

          setProducts(data.products);

        }
        else{

          setProducts([]);

        }

      }
      catch(error){

        console.log(error);

        setProducts([]);

      }
      finally{

        setLoading(false);

      }

    }


    searchProducts();

  },[searchText]);







  let filteredProducts = [...products];



  if(selectedBrand){

    filteredProducts = filteredProducts.filter(

      product =>

      product.name
      .toLowerCase()
      .includes(selectedBrand.toLowerCase())

    );

  }





  if(maxPrice){

    filteredProducts = filteredProducts.filter(

      product =>

      product.platforms?.[0]?.price <= Number(maxPrice)

    );

  }





  if(sortType==="low"){

    filteredProducts.sort(

      (a,b)=>

      a.platforms[0].price -
      b.platforms[0].price

    );

  }





  if(sortType==="high"){

    filteredProducts.sort(

      (a,b)=>

      b.platforms[0].price -
      a.platforms[0].price

    );

  }






  return (

    <div className="product-container">


      {

        compareMessage &&

        <p

          style={{

            margin:"15px",

            padding:"12px",

            background:"#dcfce7",

            color:"#166534",

            borderRadius:"10px",

            fontWeight:"bold"

          }}

        >

          {compareMessage}

        </p>

      }





      {

        loading &&

        <h3>

          Searching products...

        </h3>

      }





      {

        !loading &&

        filteredProducts.length===0 &&

        searchText &&

        <h3>

          No products found

        </h3>

      }





      {

        filteredProducts.map(product=>(

          <div key={product.id}>


            <button

              onClick={()=>addToCompare(product)}

              style={{

                margin:"15px",

                padding:"10px 20px",

                borderRadius:"10px",

                border:"none",

                background:"#16a34a",

                color:"white",

                cursor:"pointer"

              }}

            >

              ⚖ Add to Compare

            </button>


            <ProductCard

              product={product}

            />


          </div>

        ))

      }


    </div>

  );

}


export default ProductList;