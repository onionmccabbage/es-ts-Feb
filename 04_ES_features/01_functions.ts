// how to write a function - let me count the ways

const fnB = x=>x*x // look - no braces
const fnC = x => {return x*x} // we must say 'return' if using {} (and we need to return)
const fnD = (x, y)=>x*y // if there are zero or more than one incoming argument
const fnE = ()=>{ return 'zero params'}
const fnF = (x:number)=>{return x*x}

// what about functions within classes
class Demo {
    someMethod (){

    }
    otherMethod = ()=>{}
}

// the modern preference is to declare functions as const or within class
// and avoid the 'function' keyword
