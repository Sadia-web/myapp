import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks = ['Anwer', 'Jafor', 'Rajjak','Tom'];
  const products = [
    {name:'PhotoShop', price:'$10'},
    {name:'Illustrator', price:'$15'},
    {name:'Adobe', price:'$3'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'tomato'}}>This is a List of some Heroes</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <p style={{color: 'red'}}>This is my React Paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <h4 style={{backgroundColor: 'cyan'}}>My Calculation: {(2+4) * 4}</h4>
        
        <Person name ="Mim" job="Programming"></Person>
        <Person name ="Sadia" job="Web Developing"></Person>
        <Person name ="Sadia Mim" job="React Developing"></Person>
       
      </header>
    </div>
  );
  }

  function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    }
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <br/>
        <br/>
        <button onClick ={ () => setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])

    return (
      <div>
        <h3>Dynamic Users Json API:{users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

  function Product(props){
    const productStyle ={
      border:'2px solid gray',
      backgroundColor: 'tomato',
      borderRadius:'5px',
      height:'200px',
      width:'300px',
      margin:'20px',
      padding:'10px'

    }
    const {name,price} = props.product;
    console.log(name,price);
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button>Buy Now</button>
      </div>
    )
  }
  function Person(Props){
    return (
      <div>
        <h3 >My Name: {Props.name}</h3>
        <p>My Profession: {Props.job} </p>
      </div>
    )
  }
export default App;
