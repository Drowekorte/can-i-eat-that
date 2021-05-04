const router = require("express").Router();
const axios = require("axios").default;

const APIURL = "https://api.edamam.com/search?q=";
const APIKEY = `&app_key=${process.env.EDAMAM_API_KEY}`;
const APIID = `&app_id=${process.env.EDAMAM_API_ID}`;

// Post routes
router.get("/:search", async function ({ params: { search } }, res) {
  console.log(`${APIURL}${search}${APIKEY}${APIID}`);
  const { data } = await axios.get(`${APIURL}${search}${APIKEY}${APIID}`);
  res.json(data);
});

module.exports = router;
