const multer = require("multer");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const searchProducts = require("./services/productSearch");
const getAIRecommendation = require("./services/aiAssistant");
const identifyImage = require("./services/imageAI");


const app = express();


app.use(cors());
app.use(express.json());


const upload = multer({
    dest:"uploads/"
});


// Temporary user storage
let users = [];




// PRODUCT SEARCH

app.get("/search", async (req,res)=>{

    try{

        const query = req.query.q;


        if(!query){

            return res.json({
                products:[]
            });

        }


        const products = await searchProducts(query);


        res.json({

            products:products

        });


    }
    catch(error){

        console.log(error);

        res.status(500).json({

            products:[]

        });

    }

});







// REGISTER

app.post("/register", async(req,res)=>{

    try{

        const {username,password}=req.body;


        if(!username || !password){

            return res.json({

                success:false,
                message:"Username and password required"

            });

        }


        const exists = users.find(
            user=>user.username===username
        );


        if(exists){

            return res.json({

                success:false,
                message:"Username already exists"

            });

        }


        const hashedPassword =
        await bcrypt.hash(password,10);



        users.push({

            username,
            password:hashedPassword

        });



        res.json({

            success:true,
            message:"Account created successfully"

        });


    }
    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

});



// LOGIN

app.post("/login", async(req,res)=>{

    try{


        const {username,password}=req.body;


        const user = users.find(
            u=>u.username===username
        );


        if(!user){

            return res.json({

                success:false,
                message:"User not found"

            });

        }



        const checkPassword =
        await bcrypt.compare(
            password,
            user.password
        );


        if(!checkPassword){

            return res.json({

                success:false,
                message:"Wrong password"

            });

        }



        res.json({

            success:true,
            username:user.username

        });


    }
    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

});


// AI ASSISTANT

app.post("/ai", async(req,res)=>{

    try{


        const {requirement}=req.body;


        if(!requirement){

            return res.json({

                message:"Please enter your requirement"

            });

        }



        const answer =
        await getAIRecommendation(requirement);



        res.json({

            recommendation:answer

        });


    }
    catch(error){

        console.log(error);


        res.status(500).json({

            message:"AI error"

        });

    }

});









// IMAGE SEARCH AI

app.post("/image-search", upload.single("image"), async(req,res)=>{


    try{


        if(!req.file){

            return res.json({

                products:[]

            });

        }



        console.log(
            "Image received:",
            req.file.filename
        );



        // AI identifies product from image

        const productName =
        await identifyImage(
            req.file.path
        );



        console.log(
            "Detected product:",
            productName
        );



        // Search marketplace products

        const products =
        await searchProducts(
            productName
        );
        console.log("Products found:", products);



        res.json({

            detected:productName,

            products:products

        });



    }
    catch(error){


        console.log(error);



        res.status(500).json({

            products:[]

        });


    }


});

app.listen(5000,()=>{

    console.log(
        "Server running on port 5000"
    );

});