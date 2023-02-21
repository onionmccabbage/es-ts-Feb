// here we declare some types we will need
export interface Penguin {
    breed:string
    yearOfBirth:number
}

export type Dog = {
    breeds:string[], // or Array<string>
    yearOfBirth:number
}

export interface Post {
    userId  : number
    id      : number
    title   : string
    body    : string
}