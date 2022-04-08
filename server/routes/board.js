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

// * GET /board/like
router.get("/like", boardController.like.get);

// * POST /board/like
router.post("/like", boardController.like.post);

// * PATCH /board/recruiting
router.patch("/recruiting", boardController.recruiting.patch);

// * GET /board/mypost
router.get("/mypost", boardController.mypost.get);

// * POST /board/cmt
router.post("/cmt", boardController.cmt.post);

// * get /board/cmt
router.get("/cmt", boardController.cmt.get);

// * PATCH /board/cmt
router.patch("/cmt", boardController.cmt.patch);

// * DELETE /board/cmt
router.delete("/cmt", boardController.cmt.delete);

// * POST /board/writing
router.post("/writing", boardController.writing.post);

module.exports = router;

//https://server.cocodus.site/writing
//http://localhost:8080/writing
