const fs = require("fs");


async function identifyImage(imagePath){

    try{

        const imageBuffer = fs.readFileSync(imagePath);


        const response = await fetch(

            "https://router.huggingface.co/hf-inference/models/google/vit-base-patch16-224",

            {

                method:"POST",

                headers:{

                    "Authorization":
                    `Bearer ${process.env.HUGGINGFACE_API_KEY}`,

                    "Content-Type":
                    "application/octet-stream"

                },

                body:imageBuffer

            }

        );


        const result = await response.json();


        console.log(
            "HF RESULT:",
            result
        );


        if(
            Array.isArray(result) &&
            result.length > 0
        ){

            return result[0].label;

        }


        return null;


    }
    catch(error){

        console.log(
            "IMAGE AI ERROR:",
            error
        );


        return null;

    }

}


module.exports = identifyImage;