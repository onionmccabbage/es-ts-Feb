import React from 'react';
import logo from './logo.svg';
import './App.css';

// import {Photo, fetchUsers} from './tryit'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

export interface Photo {
  albumId      : number
  id           : number
  title        : string
  url          : string
  thumbnailUrl : string
}

const fetchUsers = async <T,>(): Promise< Array<T> | string | undefined >=>{ 
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
