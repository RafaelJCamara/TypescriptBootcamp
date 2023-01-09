function compareStrings(string1, string2) {
    return string1 === string2;
}
function hasSomething(has) {
    if (has)
        console.log("has");
}
console.log(compareStrings("abc", "abc"));
hasSomething(true);
//console.log(compareStrings("abc", 1));
/* const person : object = {
  name: "Rafael",
  age: 26,
};


accessing the age property will give an error because we are defining person as being of type object generic
console.log(person.age) */
//we can either specify the key type pair or let typescript make the inference for us
var person = {
    name: "Rafael",
    age: 26
};
var ContractType;
(function (ContractType) {
    ContractType[ContractType["FULL_TIME"] = 0] = "FULL_TIME";
    ContractType[ContractType["PART_TIME"] = 1] = "PART_TIME";
})(ContractType || (ContractType = {}));
var anotherObject = {
    contract: ContractType.FULL_TIME
};
console.log(anotherObject.contract);
