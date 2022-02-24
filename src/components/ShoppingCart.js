import { Link } from 'react-router-dom'
import { FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa'
// import '../components/styles/ShoppingCart.scss'
import Header from './Header';

const ShoppingCart = ({ cartItems, handleAddVideoGame, handleRemoveVideoGame, handleCartClearance, totalPrice}) => {
  

  return (
    
    <div className="__shoppingcart">
      <Header />
        <div className="title__container--yourcart">
          <h1>Your Cart</h1>
        </div>
        <div className='div__container--backbtn'>
          <Link to="/" className='link__backbtn'><button className='btn-primary btn'><FaArrowLeft /> Home</button></Link>
        </div>
        <section className='section__cartitems'>
          <div className='section__container--cartitems'>
          <div className='section__container--clearcartbtn'>
            <button className='btn-warning btn section__btn--clearcart' onClick={() => handleCartClearance()}>Clear Cart</button>
          </div>
            {cartItems.length === 0 && (
              <p className='cart__p--noitemsadded'> No items have been added.</p>
              )}
              {cartItems.map((item) => { 
              return <figure className='section__container--videogame' key={item.id}>
                <div className='items__div--container'>
                  <img src={item.img} className="section__img--videogame" alt="Video Game" loading='lazy' />
                  <div className='section__description--videogame'>
                    <h4 className='section__title--videogame'>{item.title}</h4>
                    <p className='section__price--videogame'>${item.price}</p>
                  </div>
                </div>
                <div className='cartfunctions__div'>
                  <div className='cart__items--function'>
                    <button className='btn-primary btn cart__items--remove' onClick={() => handleRemoveVideoGame(item)}><FaMinus /></button>
                    <button className='btn-primary btn cart__items--add' onClick={() => handleAddVideoGame(item)}><FaPlus /></button>
                    <div className='cart__item--quantity'>
                      {item.quantity} x {item.price}
                    </div>
                  </div>
                </div>
              </figure>
              })}
              <div className='cart__items--pricecontainer'>
                  <p className='cart__p--totalprice'>SubTotal: ${totalPrice.toFixed(2)}</p>
              </div>
        </div>
        </section>                                                         
        <div className='checkout__container--btn'>
          <Link to="/checkout/" ><button className='btn-success btn checkout__btn'>Proceed Checkout</button></Link>
        </div>
    </div>
  );
}

export default ShoppingCart