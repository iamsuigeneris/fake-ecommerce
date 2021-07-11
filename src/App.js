import React,{useState} from 'react'
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])
  return (
    <Router>  
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home cart={cart} setCart={ setCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
        
      </div>

    </Router>
  );
}

export default App;
