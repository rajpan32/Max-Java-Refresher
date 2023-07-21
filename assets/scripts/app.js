//import values and function
import { val1 as v1, val2, transformToObjects } from "./utils.js";
//import default value
import reactVal from "./utils.js";
let hereV1 = v1;
console.log(hereV1);
console.log(val2);
console.log(reactVal);

//usinf imported function
let testTransformToObjects = transformToObjects([1, 2, 3, 4]);
console.log(testTransformToObjects);

//userage of destructor
const { username: uName, uAge } = {
  username: "Max",
  uAge: 20
};

console.log(uName);
console.log(uAge);

function storeOrder({ id, currency }) {
  // destructuring
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}

storeOrder({ id: 5, currency: "USD", amount: 15.99 });
console.log(localStorage.id);
console.log(localStorage.currency);
console.log(localStorage.amount);

//Spread function
let spreadArr1 = ["tree", "flower", "vegiee"];
let spreadArr2 = ["car", "bike", "cycle"];
let spreadArr3 = [spreadArr1, spreadArr2];
console.log(spreadArr3);
let spreadArr4 = [...spreadArr1, ...spreadArr2];
console.log(spreadArr4);

//function calling function
function greet(greatParam) {
  greatParam();
}

greet(() => console.log("Hi fom Greet"));

const user = {
  name: "name",
  age: 35
};

const extendedUser = {
  ...user,
  sex: "Male",
  role: "Admin"
};

console.log(extendedUser);
