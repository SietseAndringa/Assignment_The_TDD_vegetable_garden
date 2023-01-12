// make crops

// make functions for:

// getYieldForPlant

const getYieldForPlant = function (plant) {
    return plant.yield;
}

// getYieldForCrop

const getYieldForCrop = function (crop) {
    return crop.crop.yield * crop.numCrops;
}

// getTotalYield 
// getCostsForCrop
// getRevenueForCrop
// getProfitForCrop
// getTotalProfit

module.exports = {
    getYieldForPlant,
    getYieldForCrop
}