import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/molecules/NavBar/NavBar';
import Footer from './components/molecules/Footer/Footer';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import SignUp from './components/Pages/Signup/SignUp';
import SignIn from './components/Pages/SignIn/SignIn';
import ProductDetail from './components/Pages/Product/ProductDetail';
import React from 'react';
import { BrowserRouter as Router, 
  Route , 
  Switch,
} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
function App() {
  const [cartList, setCartList] = React.useState([])

  const addToCart = (item) => {
    setCartList([...cartList, item])
  }
  const removeFromCart = (item) => {
    setCartList(cartList.filter((cartItem) => cartItem !== item))
  }

  return (
    <div className="App">
      <Router>
        <NavBar
          cartList={cartList}
        />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/product/:id">
            <ProductDetail
              addToCart={addToCart}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartList={cartList}
              removeFromCart={removeFromCart}
            />
          </Route>  
         </Switch>
      </Router>
        <Footer/>
    </div>
  )
}

export default App
