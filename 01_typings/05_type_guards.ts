{
    // we may need to guard against type oddities
    const eg = (sn:string | number )=>{
        // to guard against disallowed properties, use if, aka type-guards
        if ( typeof sn == 'string' ){
            return sn.length // we get development-time code hinting for string type
        } else {
            return sn.toFixed(2) // we get development-time code hinting for number type
        }
    }

    const words = 'one point four nine six'
    const num   = 1.496

    console.log( eg(words) ) 
    console.log( eg(num) ) 

}