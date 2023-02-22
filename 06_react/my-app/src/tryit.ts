export interface Photo {
    albumId      : number
    id           : number
    title        : string
    url          : string
    thumbnailUrl : string
  }
  
  export const fetchUsers = async <T>(): Promise< Array<T> | string | undefined >=>{ 
    // const fetchUsers = async (): Promise< Array<Photo> | string | undefined >=>{ 
      const API = `https://jsonplaceholder.typicode.com/users`
      try {
          const response = await fetch(API)
          return response.json() 
      }
      catch (err) {
          if (err) {
              return err as string //err.message
          }
      }
      finally {}
  }