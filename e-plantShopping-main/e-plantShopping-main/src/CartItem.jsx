import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  
  const calculateTotalAmount = () => {
    
 
  };

  //Const handleContinueShopping and handleCheckout : create a window.alert() for displaying infos ?
  //Window.alert() did not work in this case
  const [showModalB, setShowModalB] = useState(false);
  const handleContinueShopping = (e) => {
    setShowModalB(true);
   
  };

  const [showModalA, setShowModalA] = useState(false);
  const handleCheckout = (e) => {
      setShowModalA(true);
  };
// les constantes handleIncrement et handleDecrement ci-dessous sont également à écrire : cela permet d'ajuster le nombre de plantes dans le panier
//tu dois déjà pouvoir envoyer des plantes dans le panier, donc faire apparaître les plantes avant toute choses. Commence par ProductList jsx et css
// idem pour la const remove, tu dois d'abord pouvoir ajouter des plantes au panier avant de pouvoir les enlever
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = (item) => {
    
  };

  const handleDecrement = (item) => {
   setQuantity(prevQuantity => prevQuantity - 1);
   return(item.quantity);
  };

  const handleRemove = (item) => {
  };

  // Calculate total cost based on quantity for an item
  // simple opération d'addition et de soustraction avec la props {cost.index} à gérer
  const calculateTotalCost = (item) => {
    
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        {showModalB && (<div className="modalContinueShopping" style={{backgroundColor: "white", alignItems:"center", position:"center", textAlign:"center"}}>
          <p style={{fontFamily: "arial", fontSize: "25px", padding: "30px", margin: "30px"}}>Do you want to continue shopping ?</p>
          <a href="/shoppingreact/ProductList" style={{backgroundColor:"green", color:"white", padding: "15px", margin: "10px", textDecoration: "none", borderRadius:"15px"}}>Ok</a>
        </div>)}
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckout(e)}>Checkout</button>
        {showModalA && (<div className="modalCheckout" style={{backgroundColor: "white", alignItems:"center", position:"center", textAlign:"center"}}>
          <p style={{fontFamily: "arial", fontSize: "25px", padding: "30px", margin: "30px"}}>See you soon !!!</p>
        <a href="/" style={{backgroundColor:"green", color:"white", padding: "15px", margin: "10px", textDecoration: "none", borderRadius:"15px"}}>Ok</a></div>)}
      </div>
    </div>
  );
};

export default CartItem;


