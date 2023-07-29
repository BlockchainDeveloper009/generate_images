const express = require("express");
const userRoutes = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact } = require("./userController.js")
// const dotenv = require("dotenv").config();

// const app = express();

userRoutes.route("/getUsers").get((req,res) => {
    res.status(200).json({message: "----Get all users"});
});

userRoutes.route("/").post(createContact);

//router.route("/").post(createContact);
userRoutes.route("/").get(getContacts);
// router.route("/:id").get(getContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = userRoutes;