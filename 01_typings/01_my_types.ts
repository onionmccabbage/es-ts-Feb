{
    let a = 1 // This is Typescript
    let b:number = 2 // we can explicitly declare a type
    // by inference, Typescript assigns a type
    // a = 'oops'
    // There are the built-in types of JS number, string, boolean, null, array
    // Typescript adds some additional types, 'any', dictionary, enum
    // We can declare our OWN types and type hierachies
    // EVERYTHING descends from <object>
}
{
    let a = 'ok' // we are in a different scope
    const b = 'immutable constant'
    // b ='changed'
    // ES offers number, string, boolean, array, object types
    // typescript adds the any type, the tuple, dictionary, enum types
    let c:any = 1 // thsi is called 'post-colon data typing'
    c = 'ok' // ... so why bother typing it?
}
{
    // we can declare our own types when the existing ones do not suffice
    // we can declare literal types
    type Kingdom   = 'Bacteria' | 'Protozoa' | 'Chromista' // here they are all string
    let k:Kingdom  = 'Protozoa'
    // k = 'oops'
    type Arbitrary = 'literaly this' | 10 | false | Kingdom // any mix of types
    let r:Arbitrary = 10
}
{
    // also enumeration types (indexed from zero)
    enum BoxSize { // enum uses curly braces
        Small, Medium // implicilty, small is set to zero
    }

    let c = BoxSize.Large // it looks ahead

    // enums are extendable
    enum BoxSize {
        Large=2, // explicitly set to 2
        XLarge   // implicitlye 3
    }

    let boxType = BoxSize.Medium // it can ONLY be this

    console.log(boxType) // what is it?????

}
{
    // Data types and functions
    // function to convert a number to a string
    type allowed = number | string // handy to use literals when they occur lots

    // const fn = (x:number | string):string=>{ // we insist the return type will be a string
    const fn = (x:allowed):string=>{ // we insist the return type will be a string
        return `${x}` // 'back-tick' syntax is modern ES
    }

    // use the fn
    let n = 4
    let o = 'three'
    let s = fn(n)
    let t = fn(o)
    console.log(s, typeof(s), t)

    // using literal types in functions
    type my_type = boolean | number | string
    const fnB = ():my_type=>{
        // return 3
        // return false
        // return 'Error!!!!!'
        // return null
        return Number.NaN // yep - its is a numeric data type

    }

    // if we say we will return something we MUST return that type, even 'null'

    // ES allows optional parameters in functions
    const fnD = (opt?:any):void=>{ // the '?' makes the argument optional
        // nothing to see here 'void' means we will NOT return ANYTHING
        return opt
    }

    let y = fnD() // all good - the argument is optional
    let x = fnD(n) // also all good 

}

{
    // the TUPLE type
    let poem:[number, boolean, string] // this MUST be in the exact order
    poem = [1, true, 'love']
    console.log(poem, poem[2])
}
