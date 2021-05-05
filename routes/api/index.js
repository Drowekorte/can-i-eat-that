const router = require("express").Router();

// Post routes
// router.use("/posts", require("./posts"));
router.use("/user", require("./user"));
router.use("/recipes", require("./recipes"));

module.exports = router;
