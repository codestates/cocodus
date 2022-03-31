const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");

// * POST /user/signup
router.post("/signup", userController.signup.post);

router.get("/signup", userController.signup.get);

router.get("/signup/github", userController.signup.github);

router.get("/signup/google", userController.signup.google);

router.get("/signup/kakao", userController.signup.kakao);

router.get("/signup/kakao/oauth", userController.signup.oauth);

// * GET /user/signin
router.get("/login", userController.login.get);

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
