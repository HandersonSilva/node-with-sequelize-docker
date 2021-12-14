const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const router = express.Router();

router.get("/users", UserController.index);
router.post("/users", UserController.store);

router.get("/users/:user_id/address", AddressController.index);
router.post("/users/:user_id/address", AddressController.store);

router.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

module.exports = router;
