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
