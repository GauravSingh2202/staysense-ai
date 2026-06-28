const express = require("express");

const router = express.Router();

const {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
    searchReviews
} = require("../controllers/reviewController");

// GET ALL REVIEWS
router.get("/", getReviews);

// SEARCH REVIEWS
router.get("/search", searchReviews);

// GET SINGLE REVIEW
router.get("/:id", getReviewById);

// CREATE REVIEW
router.post("/", createReview);

// UPDATE REVIEW
router.put("/:id", updateReview);

// DELETE REVIEW
router.delete("/:id", deleteReview);

module.exports = router;