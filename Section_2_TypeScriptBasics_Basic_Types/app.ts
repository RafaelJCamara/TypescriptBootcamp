function compareStrings(string1: string, string2: string) {
  return string1 === string2;
}

function hasSomething(has: boolean) {
  if (has) console.log("has");
}

console.log(compareStrings("abc", "abc"));
hasSomething(true);

//console.log(compareStrings("abc", 1));
