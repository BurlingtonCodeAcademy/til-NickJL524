//imports
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Strategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const DataStore = require("./client/src/components/Post.js");
const path = require("path");
const app = express();
//global variables
const staticDir = path.resolve("./client/public");
const port = process.env.PORT || 5000;

//database setup
mongoose.connect("mongodb://localhost:27017/auth");

//keys
const UserSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  topic: String,
});

//creating content for database
const UserModel = mongoose.model("User", UserSchema);

//authentication setup
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

passport.use(
  new Strategy(options, async (token, done) => {
    let userData = await UserModel.findOne({ _id: token.sub });

    if (userData) {
      return done(null, userData);
    }
  })
);
