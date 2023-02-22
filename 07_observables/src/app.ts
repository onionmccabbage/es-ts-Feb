import { fromEvent, debounceTime, map, tap } from 'rxjs' // TSC will use node to resolve where this is - its a node module
// import { debounceTime, map, tap } from 'rxjs/operators'

// here are some potential search strings for our user
const testData:string[] = [
    "people",
    "planets",
    "species",
    "vehicles",
    "starships"
]
// we need to grab some parts of the DOM
// const searchBox = document.querySelector<HTMLInputElement>('#search')
// const searchBox:HTMLInputElement = document.querySelector('#search')
const searchBox = document.querySelector('#search') as HTMLInputElement // cast for TS accuracy
const results   = document.querySelector('#results') as HTMLElement
const notEmpty = (input:string)=>{ 
    // if input string is great than zero, this returns 'true' else 'false'
    return input && input.trim().length > 0 // always trim excess characters
}
// some utility methods
const sendRequest = (arr:string[], query:string)=>{
    return arr.filter( (item)=>{
        return query.length > 0 && item.startsWith(query) // check if the search term is in our list
    } )
}
const appendResults = (container:HTMLElement, results:string[])=>{
    for (const result of results){
        const li = document.createElement("li")
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li) // we inject our results as HTML into the DOM
    }
}
const cleanUpUtil = (container:HTMLElement)=>{
    while(container.childElementCount > 0){
        container.removeChild( container.firstChild as HTMLElement )
    }
}
// we can make an observable called keyStream$ - the $ is conventional
const keyStream$ = fromEvent(searchBox, "keyup")
// now we use the observable
keyStream$.pipe(
    debounceTime(500), // don't bother responding if they enter faster than this
    map( (event)=>{
        const input = event.target as HTMLInputElement // the key-event will have come from a target element
        return input.value //this will be the ENTIRE contents of the search field
    } ),
    tap( (item)=>{console.log(`we recieved ${item}`)} ),
    map( (query)=>{
        return sendRequest(testData, query)
    } )
).subscribe( (result)=>{
    // clean up previous suggestions
    cleanUpUtil(results)
    // show latest suggestions
    appendResults(results, result)
} )




