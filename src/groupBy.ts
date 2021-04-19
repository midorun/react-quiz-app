export const groupBy = (data: any[], callback: (item: any) => string | number) => {
    const res: any = {}
    data.forEach(item => {
        const key = callback(item)
        res[key] = res[key] ? [...res[key], item] : [item]
    })
    return res
}

export const groupBy2 = (data: any[], callback: (item: any) => string | number) => {
    return data.reduce((res: any, item) => ({
        ...res,
        [callback(item)]: res[callback(item)] ? [...res[callback(item)], item] : [item]
    }), {})
}

// simple
// console.log(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor));
let result = {
    "0": [0.4],
    "1": [1.2, 1.1],
    "2": [2.3],
};

// complecated
groupBy(["one", "two", "three"], (el) => el.length);
let result2 = {
    "3": ["one", "two"],
    "5": ["three"],
};

// types
enum Gender {
    Male,
    Female,
}
groupBy(
    [
        { g: Gender.Male, n: "A" },
        { g: Gender.Female, n: "B" },
        { g: Gender.Female, n: "C" },
    ],
    (el) => el.g
);
let result3 = {
    [Gender.Male]: [{ g: Gender.Male, n: "A" }],
    [Gender.Female]: [
        { g: Gender.Female, n: "B" },
        { g: Gender.Female, n: "C" },
    ],
};