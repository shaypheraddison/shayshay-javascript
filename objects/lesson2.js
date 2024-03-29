// # create a object and add a value to it
const object1 = {};
object1.car = "toyota";
object1.color = "white";
object1.miles = 28000;
console.log(object1);

// # create a object and access a key/value from it
const object2 = {
    name: "Gary",
    job: "Garbaage Man",
    years: 15,
    pay: 65000
};
console.log(object2.name)
console.log(object2.job)

// # create a object and delete a value from it
const object3 = {
    switches: "brown",
    ledLights: true,
    color: "navy",
    wired: false
};
delete object3["ledLights"];
console.log(object3);

// # create a object and change a value from it
const object4 = {
    make: "Toyota",
    model: "Camry",
    color: "black",
    driveType: "automatic"
};
object4["color"] = "silver";
console.log(object4);