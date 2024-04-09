//----------- Import the packages from packages, use to make strong apis -------X
const bcrypt = require('bcryptjs'); //Convert password into hash
const jwt = require('jsonwebtoken'); // Tokenized our users

const cloudinary = require('cloudinary'); //To upload files--

//-------------- Model Specific Stuff
const UsersModel = require('../models/UsersModel'); //User modal

//------------ Utils Specific Stuff
const SendMail = require('../utils/SendMail');
const getDataUri = require('../utils/DataUri');


//------------------ Creating the UsersControllerss to authenticate the users -----------X
function UsersControllers() {

    return {

        // Register the users, using POST '/api/user/register'
        async Register(req, res) {
            try {
                //--------- Req.body content
                const { name, username, email, password, cpassword } = req.body;

                //Requring all the specific fields
                if (!name || !username || !email || !password || !cpassword) { return res.status(404).json({ success: false, msg: "All fields are required" }) };

                if (password.length < 8 || cpassword.length < 8)
                    return res.status(404).json({ success: false, msg: "Password & Confirm password must be 8 char long" })

                //check password and confirm password match
                if (password !== cpassword) { return res.status(404).json({ success: false, msg: "Password and ConfrimPassword did not match" }) };

                // Check the user is already register
                let users = await UsersModel.findOne({ email })
                if (users) { return res.status(401).json({ success: false, msg: "this crenditentals's user is already exist" }) };

                //Upload profile pictures
                const file = req.file;

                if(!file)
                    return res.status(404).json({success:false,msg:"File not found"})

                const fileUri = await getDataUri(file);

                const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

                //Converting the password into hash
                const hashPassword = await bcrypt.hash(password, 10)    

                //Register the users
                users = await UsersModel.create({
                    name,
                    email,
                    password: hashPassword,
                    avatar: myCloud?.secure_url,
                    username
                })

                //--------- Send Mail------------
                const homePage = process.env.FRONTEND_URL;
                const message = `<pre>Thank you to becomming our new member, We always take care of our users privacy
                Go to page ${homePage}
                </pre>`
                await SendMail(users?.email, "Congrats For Becomming Aeonaxy Member", message,users?.name);

                // Now create the token to authorizing the users
                const payloads = {
                    user: { id: users._id }
                }
                const Secret_Key = process.env.JWT_SECRET_KEY;

                const token = await jwt.sign(payloads, Secret_Key, { expiresIn: '10d' })
                
                // res.redirect(`${process.env.FRONTEND_URL}/verfiyUser`,)

                return res.status(200).json({ success: true, msg: 'You are successfully register', users, token });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        // Login the users, using POST '/api/user/login'
        async Login(req, res) {
            try {
                //--------- Req.body content
                const { email, password } = req.body;

                //Requring all the specific fields
                if (!email || !password) { return res.status(404).json({ success: false, msg: "All fields are required" }) };

                // Check the user is not already register
                let users = await UsersModel.findOne({ email })
                if (!users) { return res.status(401).json({ success: false, msg: "Your crenditentals is not correct" }) };

                //Comparing the password of register and login user
                const hashPassword = await bcrypt.compare(password, users.password)
                if (!hashPassword) { return res.status(404).json({ success: false, msg: "Your credentials not correct" }) }

                // Now create the token to authorizing the users
                const payloads = {
                    user: { id: users._id }
                }
                const Secret_Key = process.env.JWT_SECRET_KEY;

                const token = await jwt.sign(payloads, Secret_Key, { expiresIn: '10d' })

                return res.status(200).json({ success: true, msg: `Welcome back ${users?.name}`, users, token });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

        // Get the info of login user, using GET '/api/user/getUser'
        async getUser(req, res) {
            try {
                const user = req.user;

                return res.status(200).json({ success: true, msg: `Welcome back ${req.user.name}`, user });

            } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
        },

    }
}


module.exports = UsersControllers;