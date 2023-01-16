const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./Vegetable_Garden");



// crop specs:

const corn = {
    name: "corn",
    yield: 3,
    cost: 1,
    salePrice: 3
};

const potatoes = {
    name: "potatoes",
    yield: 5,
    cost: 2,
    salePrice: 5
};

// Array of crop types and amount

const crops = [
    { crop: corn, numCrops: 15 },
    { crop: potatoes, numCrops: 10 },
];

// make tests for:

// ---getYieldForPlant---
// Each plant has a standard yield in kilograms. If no environmental factors play a role, then 
// that is the yield.

describe("getYieldForPlant", () => {

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(3);
        expect(getYieldForPlant(potatoes)).toBe(5);
    });
});

// ---getYieldForCrop---

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {

        const input1 = {
            crop: corn,
            numCrops: 15,
        };

        const input2 = {
            crop: potatoes,
            numCrops: 10,
        };

        expect(getYieldForCrop(input1)).toBe(45);
        expect(getYieldForCrop(input2)).toBe(50);
    });
});

// ---getTotalYield---

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        expect(getTotalYield({ crops })).toBe(95);
    });

    test("Calculate total yield with 0 amount", () => {
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// ---getCostsForCrop---

describe("getCostsForCrop", () => {
    test("calculate the cost for a crop", () => {

        const input1 = {
            crop: corn,
            numCrops: 15,
        };

        const input2 = {
            crop: potatoes,
            numCrops: 10,
        };

        expect(getCostsForCrop(input1)).toBe(15);
        expect(getCostsForCrop(input2)).toBe(20);
    });
});

// ---getRevenueForCrop---

// revenue = yield * numCrops * salePrice 

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop (without environmental factors)", () => {

        const input1 = {
            crop: corn,
            numCrops: 15,
        };

        const input2 = {
            crop: potatoes,
            numCrops: 10,
        };

        expect(getRevenueForCrop(input1)).toBe(135);
        expect(getRevenueForCrop(input2)).toBe(250);
    });
});

// ---getProfitForCrop---

// Profit = revenue - costs

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop (without environmental factors)", () => {

        const input1 = {
            crop: corn,
            numCrops: 15,
        };

        const input2 = {
            crop: potatoes,
            numCrops: 10,
        };

        expect(getProfitForCrop(input1)).toBe(120);
        expect(getProfitForCrop(input2)).toBe(230);
    });
});

// ---getTotalProfit---

// total profit = add all values of getProfitForCrops

describe("getTotalProfit", () => {
    test("calculate the profit for multiple crops (without environmental factors)", () => {
        expect(getTotalProfit({ crops })).toBe(350);
    });
});