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

// we can make an observable called keyStream$ - the $ is conventional
const keyStream$ = fromEvent(searchBox, "keyup")
// now we use the observable
keyStream$.pipe(
    map( (event)=>{
        const input = event.target as HTMLInputElement // the key-event will have come from a target element
        return input.value //this will be the ENTIRE contents of the search field
    } ),
    tap( (item)=>{console.log(`we recieved ${item}`)} )
).subscribe( ()=>{} )




