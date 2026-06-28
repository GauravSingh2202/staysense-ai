const reviews = require("../data/reviews");

// GET ALL REVIEWS
exports.getReviews = (req, res) => {
    res.status(200).json(reviews);
};

// GET SINGLE REVIEW
exports.getReviewById = (req, res) => {
    const id = parseInt(req.params.id);

    const review = reviews.find(r => r.id === id);

    if (!review) {
        return res.status(404).json({
            success: false,
            message: "Review not found"
        });
    }

    res.status(200).json(review);
};

// CREATE REVIEW
exports.createReview = (req, res) => {

    const { review, sentiment, theme, response } = req.body;

    if (!review || !sentiment || !theme || !response) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const newReview = {
        id: reviews.length + 1,
        review,
        sentiment,
        theme,
        response
    };

    reviews.push(newReview);

    res.status(201).json({
        success: true,
        message: "Review added successfully",
        data: newReview
    });

};

// UPDATE REVIEW
exports.updateReview = (req, res) => {

    const id = parseInt(req.params.id);

    const reviewIndex = reviews.findIndex(r => r.id === id);

    if (reviewIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Review not found"
        });
    }

    reviews[reviewIndex] = {
        ...reviews[reviewIndex],
        ...req.body
    };

    res.status(200).json({
        success: true,
        message: "Review updated successfully",
        data: reviews[reviewIndex]
    });

};

// DELETE REVIEW
exports.deleteReview = (req, res) => {

    const id = parseInt(req.params.id);

    const reviewIndex = reviews.findIndex(r => r.id === id);

    if (reviewIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Review not found"
        });
    }

    reviews.splice(reviewIndex, 1);

    res.status(200).json({
        success: true,
        message: "Review deleted successfully"
    });

};

// SEARCH REVIEW
exports.searchReviews = (req, res) => {

    const query = req.query.q;

    const result = reviews.filter(r =>
        r.review.toLowerCase().includes(query.toLowerCase()) ||
        r.theme.toLowerCase().includes(query.toLowerCase()) ||
        r.sentiment.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json(result);

};