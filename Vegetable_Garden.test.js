const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
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

// ---getYieldForCrop---

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

// ---getTotalYield---

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const potatoes = {
            name: "potatoes",
            yield: 5,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: potatoes, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(25);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});
// ---getCostsForCrop---
// ---getRevenueForCrop---
// ---getProfitForCrop---
// ---getTotalProfit---