const express = require("express");
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact } = require("./contactController.js")
// const dotenv = require("dotenv").config();

// const app = express();

router.route("/").get((req,res) => {
    res.status(200).json({message: "Get all contacts"});
});

router.route("/getContacts").get((req,res) => {
    res.status(200).json({message: "----Get all contacts"});
});

router.route("/").post(createContact);

//router.route("/").post(createContact);
router.route("/").get(getContacts);
router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;