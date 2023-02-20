// here we explore the 'dictionary' type
// how will this be transpiled?
let a = 1;
let b = `${a}`;
const fn = () => { };
// exercise the code
var octi;
(function (octi) {
    octi["vulgaris"] = "Vulgaris";
    octi["loligo"] = "Loligo";
})(octi || (octi = {}));
const dict = {}; // we have an empty Celaphopod dictionary object
// add some members
dict[octi.vulgaris] = { hasInk: true, arms: 8, tentacles: 0 };
dict[octi.loligo] = { hasInk: true, arms: 8, tentacles: 2 };
console.log(dict);
// the take-away - dictionaries are non-indexed by number, they are not ordinal
// but what about...
let txt = 'hi there'; // string objects are ALWAYS immutable
// txt[0] = 'H' // we can NEVER mutate the string (we can only replace it with another)
txt = 'changed';
