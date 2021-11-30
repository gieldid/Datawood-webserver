const express = require("express");
const router = express.Router();
const weightModel = require("../models/weight.model");

router.get("/", async function (request, response) {
    let weightData = await weightModel.last();

    response.json({weight: weightData.weight});
});
module.exports = router;