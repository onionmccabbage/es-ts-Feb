// ES6+ introduced generator syntax
// a generator can yield repeatedly, rather than just one 'return'

// Fibonacci sequence.Te asterisk makes the function into a generator
function* fibon() { // MUST be function* - there is no 'modern' equivalent
    let first=1, second=2
    // here is an ENLESS LOOP
    for (;;) { // for let i=0; i<Number.POSITIVE_INFINITY; i++
    // for (let i=0;i<3;i++) { // this will be exhausted after three calls
        let sum = first+second
        yield `The next number is ${sum}`
        first = second
        second = sum
    }
}
// we need a nice way to print the sequence of values
const prettyPrint= (item:IteratorResult<string>)=>{
    console.log(JSON.stringify(item))
}

// use the code
const g = fibon() // we need to call the generator function once
prettyPrint( g.next() ) // yields 3
prettyPrint( g.next() ) // yields 5
prettyPrint( g.next() ) // yields 8
prettyPrint( g.next() ) // yields 13
prettyPrint( g.next() ) // yields 21
