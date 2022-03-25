const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");

// * POST /user/signup
router.post("/signup", userController.signup.post);

// * GET /user/signin
router.post("/login", userController.login.post);

// * POST /user/logout
router.post("/logout", userController.logout.post);

// * GET /user/info
router.get("/info", userController.info.get);

// * PATCH /user/info
router.patch("/info", userController.info.patch);

// * DELETE /user/info
router.delete("/info", userController.info.delete);

// * POST /user/note
router.post("/note", userController.note.post);

// * DELETE /user/note
router.delete("/note", userController.note.delete);

module.exports = router;
