const judgeVegetable = function (vegetables, metric) {
  let bestVeg = vegetables[0];
  for (const veg of vegetables) {
    if (veg[metric] > bestVeg[metric]) {
      bestVeg = veg;
    }
  }
  return bestVeg.submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

judgeVegetable(vegetables, metric);
