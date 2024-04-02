// # print out a pyramid using '*' as the "brick"
// # your output should look like this
// #      *
// #     ***
// #    *****
// #   *******

const stars = ["*", "***", "*****", "*******"];

for (let star of stars) {
    const tree = star.padStart(3, " ");
    console.log(tree);
    
}