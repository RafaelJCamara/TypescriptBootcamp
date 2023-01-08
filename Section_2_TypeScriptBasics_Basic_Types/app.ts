function compareStrings(string1: string, string2: string) {
  return string1 === string2;
}

function hasSomething(has: boolean) {
  if (has) console.log("has");
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
const person: { name: string; age: number } = {
  name: "Rafael",
  age: 26,
};
