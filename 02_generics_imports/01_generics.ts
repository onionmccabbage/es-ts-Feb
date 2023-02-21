{
    // a common problem - we may not know beforehand exactly what type(s) we are dealing with
    function zeroethElement(a:Array<any>):any{ // function is fine with generics
        // retrun the element at position zero for a given array
        return a[0]
    }
}

{
    // solution - use generics <T> tells the function here will be a type
    const zeroethElement = <T>(array: Array<T>): T => {
        return array[0]
    }

    const a_s:Array<string> = ['alpha', 'beta', 'gamma']
    const a_n:Array<number> = [4, 3, 2]
    console.log( zeroethElement(a_s) ) // return a string
    console.log( zeroethElement(a_n) ) // return a number
}