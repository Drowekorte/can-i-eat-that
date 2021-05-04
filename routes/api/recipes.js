const router = require("express").Router();
const axios = require("axios").default;

const APIURL = "https://api.edamam.com/search?q=";
const APIKEY = `&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
const APIID = `&app_id=${process.env.EDAMAM_API_ID}`;

// Post Routers
router.get("/:search", async function ({ params: {search} }, res) {
    const { data } = await axios.get
});