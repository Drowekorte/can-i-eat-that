const router = require("express").Router();

// Post routes
router.post("/login-signup", function (req, res) {
  res.json({
    token: "signup token",
  });
});

router.post("/login-signup", (req, res) => {
  res.json({
    token: "login token",
  });
});

module.exports = router;
