

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
