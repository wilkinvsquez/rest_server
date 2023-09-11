const express = require("express");
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
  patchUser,
} = require("../controllers/users.controller");
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/", bodyParser.json(), getUser);
router.post("/", bodyParser.json(), postUser);
router.put("/:id", bodyParser.json(), putUser);
router.delete("/", bodyParser.json(), deleteUser);
router.patch("/", bodyParser.json(), patchUser);

module.exports = router;
