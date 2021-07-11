
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartPage from './components/CartPage';

function App() {
 
  return (
    <Router>  
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <CartPage  />
        </Route>
        
      </div>

    </Router>
  );
}

export default App;
