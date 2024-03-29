// # create a dictionary and loop over each item in the dictionary
const loopingDict = {
    infield: ["pitcher", "catcher", "first base", "second base", "shortstop", "third base"],
    outfield: ["left field", "center field", "right field"],
    pitchers: ["starters", "relievers", "closer"]
};
for (position in loopingDict) {
    console.log(position);
    console.log(loopingDict[position]);
}

// # create a dictionary and loop over each item while mutating the value for each key.
const mutate = {
    extraPoint: 1,
    safety: 2,
    fieldGoal: 3,
    touchdown: 6
};

for (point in mutate) {
    console.log(point);
    mutate[point] += 1;
    console.log(mutate[point]);
}