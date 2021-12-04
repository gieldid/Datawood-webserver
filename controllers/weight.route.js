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

router.post("/update", async function(request, response){
    var id = request.body.id;
    var weight = request.body.weight;
    try {
        weightModel.updateWeight(id,weight);
        response.end("Updated id: "+id +" to this weight: " + weight);
    } catch (error) {
        response.end("Failed to update");
    }
});

module.exports = router;