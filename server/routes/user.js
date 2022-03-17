const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");

// * POST /user/signup
router.post("/signup", userController.signup.post);

// * POST /user/signin
router.get("/signin", userController.signin.get);

// * POST /user/info
router.get("/info", userController.info.get);

// * POST /user/info
router.patch("/info", userController.info.patch);

// * POST /user/info
router.delete("/info", userController.info.delete);

// * POST /user/note
router.post("/note", userController.note.post);

// * POST /user/note
router.delete("/note", userController.note.delete);

module.exports = router;
