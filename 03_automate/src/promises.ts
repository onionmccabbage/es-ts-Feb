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
go(true)
    .then( (val)=>{console.log(val)} )
    .catch( (err)=>{console.log(err)} )