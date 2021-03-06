import './components/styles/App.scss';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { useState } from 'react'



function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddVideoGame = (game) => {
        const doesItExist = cartItems.find(item => item.id === game.id); // WILL THIS STILL WORK IF DELETED, DO WE NEED TO ESTABLISH WHETHER OR NOT THIS
        if(doesItExist) {
            setCartItems(cartItems.map(item => item.id === game.id ? 
            {...doesItExist, quantity: doesItExist.quantity + 1} : item));
        } else {
            setCartItems([...cartItems, {...game, quantity: 1}]);
            console.log(cartItems.map(item => item));
        }
    }

    const handleRemoveVideoGame = (game) => {
        const doesItExist = cartItems.find(item => item.id === game.id);
        if(doesItExist.quantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== game.id));
    } else {
        setCartItems(cartItems.map(item => 
            item.id === game.id 
                ? {...doesItExist, quantity: doesItExist.quantity - 1} : item));
        }
    };

    const handleCartClearance = () => {
        setCartItems([]);
    }

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home cartItems={cartItems} handleAddVideoGame={handleAddVideoGame} />} />        
                <Route path="/cart/" element={<ShoppingCart 
                    cartItems={cartItems} 
                    handleAddVideoGame={handleAddVideoGame} 
                    handleRemoveVideoGame={handleRemoveVideoGame} 
                    handleCartClearance={handleCartClearance}
                    totalPrice={totalPrice} />} /> 
                <Route path="/checkout/" element={<Checkout 
                    cartItems={cartItems} 
                    totalPrice={totalPrice}/>} 
                    handleCartClearance={handleCartClearance}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
