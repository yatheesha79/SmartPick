require("dotenv").config();

const { getJson } = require("serpapi");


async function searchProducts(query) {

    try {

        const results = await getJson({

            engine: "google_shopping",

            q: query,

            api_key: process.env.SERPAPI_KEY,

            gl: "in",

            hl: "en"

        });



        if (!results.shopping_results) {

            return [];

        }



        const products = {};



        results.shopping_results.forEach((item) => {


            const name = item.title
                .replace(/\s+/g, " ")
                .trim();



            if (!products[name]) {


                products[name] = {


                    id: Object.keys(products).length + 1,


                    name: name,


                    category: "Product",


                    platforms: []


                };


            }




            products[name].platforms.push({


                name: item.source || "Store",


                price: item.extracted_price || 0,


                rating: item.rating || 0,


                link: item.product_link || item.link || null


            });



        });



        return Object.values(products);



    }
    catch(error) {


        console.log(error.message);


        return [];

    }


}



module.exports = searchProducts;