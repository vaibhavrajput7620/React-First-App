const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const userModel = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post("/register", async (req, res) => {
  const {
    firstname,
    lastname,
    address,
    pincode,
    email,
    phonenumber,
    country,
    bio,
    dob,
    username,
    password,
    cpassword,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !address ||
    !pincode ||
    !email ||
    !phonenumber ||
    !country ||
    !bio ||
    !dob ||
    !username ||
    !password ||
    !cpassword
  ) {
    return res
      .status(422)
      .json({ errors: "please filled the field properly " });
  }
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "password are not match" });
    } else {
      const user = new userModel({
        firstname,
        lastname,
        address,
        pincode,
        email,
        phonenumber,
        country,
        bio,
        dob,
        username,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/signin", async function (req, res) {
  try {
    const { username, password } = req.body;

    const usernames = await userModel.findOne({ username });

    const token = await usernames.generateAuthToken();

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 30000),
      httpOnly: true,
    });

    if (usernames) {
      const isMatch = await bcrypt.compare(password, usernames.password);
      if (!isMatch) {
        res.status(400).json({ errors: "invalid credential" });
      } else {
        res.json({ message: "user signin successful" });
      }
    } else {
      res.status(400).json({ errors: "invalid credential" });
    }
  } catch (error) {
    // console.log(error);
    res.status(400).send("invalid username ");
  }
});
router.post("/forgot", async function(req, res){
  try {
    const { email, dob} = req.body;
   // console.log(email);
    const usernames = await userModel.findOne({email:email});
    //console.log(usernames);
  
    const token = await usernames.generateAuthToken();
  
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 30000),
      httpOnly:true,
   });
// console.log(usernames.email);
    if (usernames.dob === dob) {
      res.status(201)
      
    } else {
      res.send("dob are not match")
    }
  
    
  } catch (error) {
    res.status(400).send("invalid email")
  }
})
router.post("/reset", async function(req, res) {
  try {
    const { email, password } = req.body;

    // Assuming you have a MongoDB connection and a users collection
    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      { $set: { password: password } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ status: "Password updated successfully" });
  } catch (error) {
    console.error("Error occurred during password update:", error);
    res.status(500).json({ error: "An error occurred during password update" });
  }
});


module.exports = router;
