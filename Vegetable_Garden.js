// Crop data: 

// // crop specs:

// const corn = {
//     name: "corn",
//     yield: 3,
//     cost: 1,
//     salePrice: 3
// };

// const potatoes = {
//     name: "potatoes",
//     yield: 5,
//     cost: 2,
//     salePrice: 5
// };

// // Array of crop types and amount

// const crops = [
//     { crop: corn, numCrops: 15 },
//     { crop: potatoes, numCrops: 10 },
// ];

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

const getTotalYield = function ({ crops }) {
    let sum = 0;
    crops.forEach(item => {
        sum = sum + item.crop.yield * item.numCrops;
    });
    console.log(sum);
    return sum;
}

// getCostsForCrop

const getCostsForCrop = function (crop) {
    return crop.crop.cost * crop.numCrops;
}

// getRevenueForCrop

// revenue = yield * numCrops * salePrice 

const getRevenueForCrop = function (crop) {
    return crop.crop.yield * crop.crop.salePrice * crop.numCrops;
}

// getProfitForCrop

const getProfitForCrop = function (crop) {
    return getRevenueForCrop(crop) - getCostsForCrop(crop);
}

// getTotalProfit

// Loop over getProfitForCrop and sum the values

const getTotalProfit = function ({ crops }) {
    let sum = 0;
    crops.forEach(item => {
        sum = sum + getProfitForCrop(item);
    });
    return sum;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}