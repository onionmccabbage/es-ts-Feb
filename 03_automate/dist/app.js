// we will consume the data available at https://jsonplaceholder.typicode.com/photos
{
    // async and await can make a function behave asynchronously and return a Promise
    // a method to fetch data from an API, return it in a PROMISE
    // we are not obliged to use TypeScript but it helps in development
    // we wil use generics since TypeScript CANNOT know the actual structure returned from the API
    const fetchPhotos = async () => {
        const API = `https://jsonplaceholder.typicode.com/photos`; // back-ticks would let me inject variables into the URL
        // always a good idea to use try-catch
        try {
            // 'fetch' is part of ES6+ in a BROWSER ONLY
            const response = await fetch(API); // by default this is a 'get' request
            // or we could take response.text() or response.html() ...
            return response.json(); // this is the promise containing an array of items
        }
        catch (err) {
            if (err) {
                return err.message;
            }
        }
        finally {
            // always runs
        }
    }; // end of 'fetchPhotos' method
    // exercise the code
    fetchPhotos() // this returns a Promise so we can chain responses
        // we can get by with <any> but revisit...
        .then((d) => {
        if (typeof (d) == 'string') { } // a simple type-guard
        else {
            console.log(`We received ${d[0].title}`);
            // grab some DOM elements and populate them with data
            const c = document.getElementById('content'); // this is hte 'article' tag
            const i = document.getElementById('thumbnail'); // this is hte 'img' tag
            c.innerHTML = d[0].title; // revisit...
            i.setAttribute('src', d[0].thumbnailUrl);
            i.setAttribute('title', d[0].title);
            i.setAttribute('alt', d[0].title);
        }
    } // end of 'then' function call-back
    )
        .catch(() => { });
}
