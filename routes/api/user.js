const router = require("express").Router();

// Post routes
router.post("/signup", function (req, res) {
  res.json({
    token: "signup token",
  });
});

router.post("/login", (req, res) => {
  res.json({
    token: "login token",
  });
});

module.exports = router;
