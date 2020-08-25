import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>This is my React Paragraph</p>
        <Person name ="Mim" job="Programming"></Person>
        <Person name ="Sadia" job="Web Developing"></Person>
       
      </header>
    </div>
  );
  }
  function Person(Props){
    return (
      <div>
        <h3>My Name: {Props.name}</h3>
        <p>My Profession: {Props.job} </p>
      </div>
    )
  }
export default App;
