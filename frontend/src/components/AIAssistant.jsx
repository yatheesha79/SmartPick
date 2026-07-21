import { useState } from "react";

function AIAssistant() {

  const [query, setQuery] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [productLink, setProductLink] = useState("");
  const [loading, setLoading] = useState(false);


  const askAI = async () => {

    if (!query.trim()) {
      setRecommendation("Please enter your requirement.");
      return;
    }


    setLoading(true);


    try {

      const response = await fetch(
        `http://localhost:5000/search?q=${query}`
      );


      const data = await response.json();


      if (!data.products || data.products.length === 0) {

        setRecommendation(
          "No products found. Try a different requirement."
        );

        setLoading(false);
        return;
      }


      const best = data.products[0];


      const bestPlatform =
        best.platforms.sort(
          (a,b)=>a.price-b.price
        )[0];


      setProductLink(
        bestPlatform.link && bestPlatform.link !== "#"
          ? bestPlatform.link
          : null
      );


      setRecommendation(
`🏆 SmartPick AI Recommendation

${best.name}

💰 Best Price:
₹${bestPlatform.price}

🏪 Available at:
${bestPlatform.name}

⭐ Rating:
${bestPlatform.rating || "Not available"}

✨ Why this is recommended:
✓ Best price comparison across platforms
✓ Selected from real marketplace results
✓ Good balance between price and quality

SmartPick suggests this product based on your requirement.`
      );


    }
    catch(error){

      console.log(error);

      setRecommendation(
        "Something went wrong. Check backend connection."
      );

    }


    setLoading(false);

  };


  return (

    <section className="ai-assistant">

      <h2>
        🤖 SmartPick AI Assistant
      </h2>


      <p>
        Tell me your budget and requirements.
      </p>


      <input

        value={query}

        onChange={(e)=>setQuery(e.target.value)}

        placeholder="Example: fridge below ₹1 lakh"

      />


      <button onClick={askAI}>

        {loading ? "Finding..." : "Ask AI"}

      </button>



      {
        recommendation &&

        <div className="ai-result">

          <h3>
            ✨ AI Recommendation
          </h3>


          <div className="ai-text">

            {
              recommendation.split("\n").map((line,index)=>(

                <p key={index}>
                  {line}
                </p>

              ))
            }

          </div>



          {
            productLink && (

              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-view-btn"
              >
                🛒 View Product
              </a>

            )
          }


        </div>

      }


    </section>

  );

}


export default AIAssistant;