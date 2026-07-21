const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

let users = [];


// CREATE ACCOUNT
router.post("/register", async (req, res) => {

    try {

        const { username, password } = req.body;


        if (!username || !password) {
            return res.json({
                success:false,
                message:"Username and password required"
            });
        }


        const existingUser = users.find(
            user => user.username === username
        );


        if(existingUser){

            return res.json({
                success:false,
                message:"Username already exists"
            });

        }


        const hashedPassword =
            await bcrypt.hash(password,10);


        users.push({

            username: username,

            password: hashedPassword,

            wishlist: [],

            history: []

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
router.post("/login", async (req,res)=>{


    try {


        const {username,password}=req.body;


        const user = users.find(
            user => user.username === username
        );


        if(!user){

            return res.json({

                success:false,

                message:"Account not found"

            });

        }



        const check =
        await bcrypt.compare(
            password,
            user.password
        );



        if(!check){

            return res.json({

                success:false,

                message:"Wrong password"

            });

        }



        res.json({

            success:true,

            message:"Login successful",

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



module.exports = router;