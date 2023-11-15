const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { withAuth } = require("../authentication/authenticate");
const multer = require("multer");


const uploader = multer({dest: "public/assets/imgs/posts"})

router.get("/", postsController.index);

router.post("/", withAuth, uploader.single("image"),postsController.store);

router.get("/create", postsController.create);

router.get("/:slug", withAuth,postsController.show);

router.get("/:slug/download", postsController.download);

router.delete("/:slug/destroy", withAuth,postsController.destroy);

// router.get("/create", postsController.create);

// router.get("/:slug/download", postsController.download);

module.exports = router;