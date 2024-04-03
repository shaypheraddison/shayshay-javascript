// # print out a pyramid using '*' as the "brick"
// # your output should look like this
// #      *
// #     ***
// #    *****
// #   *******

function myRepeat (str, repeatNum) {
    var newStr = "";
    for (let x = 0; x < repeatNum; x++) {
        newStr += str;
    }
    return newStr;
}



const rows = 4;
for(let x = 1; x <= rows; x++) {
    const space = myRepeat(" ", rows - x);
    const star = myRepeat("*", x * 2 - 1);
    console.log(space + star);
  }