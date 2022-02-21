import Header from './Header'
import '../components/styles/Checkout.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Checkout = ({ cartItems, totalPrice }) => {
    const [total, setTotal] = useState(totalPrice);
    let tax = total * 0.0471;
    let shippingCost = cartItems.length * 2;
    let finalTotal = total + tax + shippingCost;

    const submitCheckoutForm = (e) => {
        e.preventDefault();
        alert("Thank You For Shopping at FireWire Games!")
    }

    return (
    <>
        <Header />
        <section className='games__section--checkout'>
            <div className='games__div--checkout'>
            {cartItems.map( item => 
                <figure className='chekout__figure--item' key={item.id}>
                    <img src={item.img} className='chekout__img--item' alt="" />
                    <p className='section__price--videogame'>${item.price}</p>
                </figure>)}
            </div>
            <section className='section__price'>
                    <div className='container__div--price'>
                        <p>SubTotal: ${total}</p>
                        <p>Tax: ${tax.toFixed(2)}</p>
                        <p>Shipping: ${shippingCost.toFixed(2)}</p>
                        <p>Total: ${finalTotal.toFixed(2)}</p>
                    </div>
                </section> 
                <form className='checkout__container--btn' name='submitForm' action='#' onSubmit={submitCheckoutForm}>
                    <button className='btn-success btn checkout__btn' type='submit'>Submit</button>
                </form>
        </section>
    </>
  )
}

export default Checkout