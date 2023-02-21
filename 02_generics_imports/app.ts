// We can import JSON so long as tsconfig says
import * as posts from './data.json'
// avoid using the astrisk except for JSON

// we could just import everythnig from within a module
import * as maths from './maths'
console.log(maths.pi, maths.phi, maths.sqrtTwo)

// or we could specify what to import 
import RandomThing, {pi, phi} from './maths'
console.log(pi, phi)

// we can import types
import { Post } from './util'
import { Penguin, Dog } from './util'

// use our imported types
type Animals = Penguin | Dog

const gromit:Dog = {
    breeds: ['plasticene', 'silicone'],
    yearOfBirth: 1991
}

const feathers:Penguin = {
    breed: 'rock-hopper',
    yearOfBirth: 1998
}

// here we handle the imported JSON (a bunch of posts)
const messages:Post[] = posts // of Array<Post>

console.log( messages[0]['title'] )