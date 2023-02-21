// destructuring in ES6+
const values = [1, 3, 6, 11, 215, 21, 66, 42]
// we can populdate some other variables by desctructuring this array
const [zeroeth, first, , third, ...rest] = values

console.log(zeroeth, first, third, rest)

// the spread operator
const squares = [1, 4, 9, 16, 25]
const powers  = [2, 4, 8, 26, 32]

const both    = [...squares, ...powers]

console.log( both )

// tuple desctructuring
const getMission  =():[string, string, string] => {
    return ['inform', 'educate', 'entertain']
}

const [inf, edu, ent] = getMission() // destructuring the returned tuple into separate values

console.log( `Mission: ${inf} ${edu} and ${ent}` )