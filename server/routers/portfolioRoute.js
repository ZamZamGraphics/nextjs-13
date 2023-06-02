const router = require("express").Router();

// All GET Route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Portfolio API Route",
  });
});

module.exports = router;
