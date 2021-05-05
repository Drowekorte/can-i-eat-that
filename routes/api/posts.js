const router = require("express").Router();
const recipesController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(recipesController.findAll)
  .recipe(recipesController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);

module.exports = router;
