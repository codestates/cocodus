const express = require("express");
const router = express.Router();

const { boardController } = require("../controllers");

// * GET /board/all
router.get("/all", boardController.all.get);

// * POST /board/cmt
router.post("/cmt", boardController.cmt.post);

// * get /board/cmt
router.get("/cmt", boardController.cmt.get);

// * PATCH /board/cmt
router.patch("/cmt", boardController.cmt.patch);

// * DELETE /board/cmt
router.delete("/cmt", boardController.cmt.delete);

// * GET /board/like
router.get("/like", boardController.like.get);

// * POST /board/like
router.post("/like", boardController.like.post);

// * GET /board/mypost
router.get("/mypost", boardController.mypost.get);

// * PATCH /board/recruiting
router.patch("/recruiting", boardController.recruiting.patch);

// * GET /board/view
router.get("/view", boardController.view.get);

// * POST /board/view
router.post("/view", boardController.view.post);

// * POST /board/writing
router.post("/writing", boardController.writing.post);

// * PATCH /board/writing
router.patch("/writing", boardController.writing.patch);

// * DELETE /board/writing
router.delete("/writing", boardController.writing.delete);

module.exports = router;
