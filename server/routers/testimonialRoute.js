const router = require("express").Router();

// All GET Route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Testimonial API Route",
  });
});

module.exports = router;
