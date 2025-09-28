const express = require("express");
const books = require("../controllers/book.controller");

const router = express.Router();

router.get("/", books.findAll);
router.post("/", books.create);

module.exports = router;
