var cowsay = require("cowsay");
const studentInfo = require(`./information.js`);


console.log(cowsay.say({
    text : `The student name is ${studentInfo.firstName} and he is at the ${studentInfo.campus}`,
    e: "oo",
    T : "U "
}));