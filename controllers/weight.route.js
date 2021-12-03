const express = require("express");
const router = express.Router();
const weightModel = require("../models/weight.model");
const weigthScaleReader = require("../utils/scale/WeightScaleReader");

router.get("/", async function (request, response) {
    //execute task to get weight here

    let weightOnScale = await weigthScaleReader.getWeight();
    console.log("weightonscale; " + weightOnScale);
    if(weightOnScale === "Failed to connect to rs232 device" || !weightOnScale){
        response.send("Failed to connect to rs232 device");
    }else{
        await weightModel.insertWeight(weightOnScale);
        let weightData = await weightModel.last();
        response.json({weight: weightData.weight});
    }
});

module.exports = router;