// implement a Promise (an ES6+ type)

const go = (isworking:boolean)=>{
    // Promises need a call-back function, either literal or named
    return new Promise( (resolve,reject)=>{
        if (isworking) {
            resolve('all good')
        } else {
            reject( new Error('something went wrong') )
        }
    } )
}


// exercise the code
go(false) // true will resolve, false will reject
    .then( (val)=>{console.log(val)} ) // promises are 'thenable' (chaining)
    .catch( (err)=>{console.log(err)} )

// promises do not block
console.log('when does this line get executed')
