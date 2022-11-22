// Packages & Models Import
const express = require("express");
const joi = require("joi");
const { Document } = require("../models/Document");
const { User } = require("../models/User");
const router = express.Router();
const _ = require("lodash");
const auth = require("../middlewares/auth");

// Document Joi Validation Schema
const documentSchema = joi.object({
  name: joi.string().required().min(2),
  desc: joi.string().required().min(2),
});

// Random Document ID
const randomDocumentId = async () => {
  while (true) {
    let randomNum = _.random(1000, 999999);
    let document = await Document.findOne({ id: randomNum });
    if (!document) return randomNum;
  }
};

// Post Document in DB
router.post("/", auth, async (req, res) => {
  console.log(req.body);

  try {
    //Joi Validation
    const { error } = documentSchema.validate(req.body);
    if (error) return res(400).send(error.message);

    // Adding DocumentID + User_id
    let document = new Document({
      name: req.body.name,
      desc: req.body.desc,
    });
    document.id = await randomDocumentId();
    document.user_id = req.payload._id;

    // Saving document in DB
    await document.save();
    res.status(201).send(document);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error in adding document");
  }
});

// Find Documents of Specific User
router.get("/my-documents", auth, async (req, res) => {
  try {
    const myDocuments = await Document.find({ user_id: req.payload._id });
    res.status(200).send(myDocuments);
  } catch (error) {
    res.status(400).send("Error in find Documents");
  }
});

// Get Specific document of Specific User
router.get("/:id", auth, async (req, res) => {
  try {
    let document = await Document.findOne({
      _id: req.params.id,
      user_id: req.payload._id,
    });
    if (!document) return res.status(404).send("Document Was Not Found");
    res.status(200).send(document);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Edit Document by ID
router.put("/:id", auth, async (req, res) => {
  try {
    const { error } = documentSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let document = await Document.findOneAndUpdate(
      { _id: req.params.id, user_id: req.payload._id },
      req.body,
      { new: true }
    );
    if (!document) return res.status(404).send("Document was not found");
    res.status(200).send(document);
  } catch (error) {
    res.status(400).send("Error in edit document");
  }
});

// Delete Document by Id
router.delete("/:id", auth, async (req, res) => {
  try {
    const document = await Document.findOneAndRemove({
      _id: req.params.id,
      user_id: req.payload._id,
    });
    if (!document) return res.status(404).send("Document was not found");
    res.status(200).send("Document was Removed");
  } catch (error) {
    res.status(400).send("Error in delete document");
  }
});

// Find All Documents in DB
router.get("/", auth, async (req, res) => {
  try {
    let documents = await Document.find();
    res.status(200).send(documents);
  } catch (error) {
    res.status(400).send("Error in get Documents");
  }
});

module.exports = router;
