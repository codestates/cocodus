const express = require("express");
const router = express.Router();

const { boardController } = require("../controllers");

// * GET /board/all
router.get("/all", boardController.all.get);

// * GET /board/list
router.get("/list", boardController.list.get);

// * PATCH /board/list
router.patch("/list", boardController.list.patch);

// * DELETE /board/list
router.delete("/list", boardController.list.delete);

// * PATCH /board/like
router.patch("/like", boardController.like.patch);

// * PATCH /board/recruiting
router.patch("/recruiting", boardController.recruiting.patch);

// * GET /board/sidechat
router.get("/sidechat", boardController.sidechat.get);

// * POST /board/cmt
router.post("/cmt", boardController.cmt.post);

// * DELETE /board/cmt
router.delete("/cmt", boardController.cmt.delete);

// * POST /board/writing
router.post("/writing", boardController.writing.post);

// * POST /board/feedback
router.post("/feedback", boardController.feedback.post);

module.exports = router;
