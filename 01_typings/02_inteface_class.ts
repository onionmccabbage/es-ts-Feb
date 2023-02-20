// TS has interface as a keyword

interface Photo {
    albumId      : number
    id           : number
    title        : string
    url          : string
    thumbnailUrl : string
    ooblywoobly? : object // this is an optional member
    // we can also declare methods in our interface
    prettyPrint? : (x:boolean)=>{} // we could enforce a return type but no need
}

// we can then use this to make a concrete class
class Snap implements Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    // we can optionally declare a constructor
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id      = snap.id
        this.title   = snap.title
        this.url     = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    // implement the prettyPrint method
    prettyPrint (x: boolean):string {
        return `${this.title} ${this.url}`
    }
}

// we would usually have separate modules and get our data from an API
let photos:Array<Photo> = [ 
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
]

const snap1 = new Snap(photos[3])
console.log(snap1['id'], snap1.prettyPrint(true))

const s2 = new Snap({ // this is duck typing - if it looks like a duck, walks like a duck, quacks like a duck - its a duck
    "albumId": 1,
    "id"     : 16,
    "title"  : 'nearly lunch',
    "url"    : 'http://nonsuch.com',
    "thumbnailUrl" : ''
})
console.log(s2.prettyPrint(false))