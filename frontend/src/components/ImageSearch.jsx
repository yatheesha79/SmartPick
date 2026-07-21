import { useState } from "react";

function ImageSearch(){

  const [image,setImage] = useState(null);
  const [preview,setPreview] = useState("");
  const [products,setProducts] = useState([]);
  const [message,setMessage] = useState("");
  const [detected,setDetected] = useState("");
  const [loading,setLoading] = useState(false);



  function handleImage(e){

    const file = e.target.files[0];

    if(file){

      setImage(file);

      setPreview(
        URL.createObjectURL(file)
      );

      setMessage("Image selected");

      setProducts([]);

    }

  }



  async function searchImage(){

    if(!image){

      setMessage("Please select an image");

      return;

    }


    setLoading(true);

    setProducts([]);

    setMessage(
      "🤖 AI is identifying your product..."
    );


    const formData = new FormData();

    formData.append(
      "image",
      image
    );


    try{


      const response = await fetch(

        "http://localhost:5000/image-search",

        {
          method:"POST",
          body:formData
        }

      );


      const data = await response.json();


      console.log(
        "Image Search Result:",
        data
      );



      setDetected(
        data.detected || ""
      );



      if(
        data.products &&
        data.products.length > 0
      ){

        setProducts(
          data.products
        );


        setMessage(
          "✅ Products found"
        );


      }
      else{


        setMessage(
          "No matching products found"
        );


      }


    }
    catch(error){


      console.log(error);


      setMessage(
        "Server error. Try again."
      );


    }


    setLoading(false);


  }



  return (

    <section className="image-search">


      <h2>
        📷 SmartPick Image Search
      </h2>


      <p>
        Upload a product image and find similar products from shopping platforms.
      </p>



      <input

        type="file"

        accept="image/*"

        onChange={handleImage}

      />



      {
        preview &&

        <img

          src={preview}

          alt="preview"

          style={{
            width:"100%",
            marginTop:"15px",
            borderRadius:"15px"
          }}

        />

      }



      <button onClick={searchImage}>

        {
          loading
          ? "Analyzing..."
          : "Find Similar Products"
        }

      </button>



      <h3>
        {message}
      </h3>



      {
        detected &&

        <p>
          🔍 Detected: {detected}
        </p>

      }



      {

        products.map((product,index)=>(


          <div

            key={index}

            className="platform-card"

          >


            <h3>
              {product.name}
            </h3>



            {

              product.platforms &&

              product.platforms.map((p,i)=>(


                <div key={i}>


                  <p>
                    🏪 {p.name}
                  </p>


                  <p>
                    💰 ₹{p.price}
                  </p>



                  <a

                    href={p.link}

                    target="_blank"

                    rel="noopener noreferrer"

                  >

                    🛒 View Product

                  </a>


                </div>


              ))

            }


          </div>


        ))

      }



    </section>

  );

}


export default ImageSearch;