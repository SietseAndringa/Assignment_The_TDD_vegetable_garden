const {
    getYieldForPlant,
    getYieldForCrop
} = require("./Vegetable_Garden");

// make tests for:

// ---getYieldForPlant---
// Each plant has a standard yield in kilograms. If no environmental factors play a role, then 
// that is the yield.

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 3,
    };
    const potatoes = {
        name: "potatoes",
        yield: 5,
    }

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(3);
        expect(getYieldForPlant(potatoes)).toBe(5);
    });
});

// getYieldForCrop

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };

        const potatoes = {
            name: "potatoes",
            yield: 5,
        }

        const cornCropCount = {
            crop: corn,
            numCrops: 10,
        };

        const potatoesCropCount = {
            crop: potatoes,
            numCrops: 10,
        };
        expect(getYieldForCrop(cornCropCount)).toBe(30);
        expect(getYieldForCrop(potatoesCropCount)).toBe(50);
    });
});
// getTotalYield
// getCostsForCrop
// getRevenueForCrop
// getProfitForCrop
// getTotalProfit