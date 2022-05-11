import Header from './Header'
import { useState } from 'react'

const Checkout = ({ cartItems, totalPrice, handleCartClearance }) => {
    const [total, setTotal] = useState(totalPrice);
    let tax = total * 0.0471;
    let shippingCost = cartItems.length * 2;
    let finalTotal = total + tax + shippingCost;

    const submitCheckoutForm = () => {
        alert("Thank You For Shopping at FireWire Games!")
    }

    return (
    <>
        <Header />
        <section className='games__section--checkout'>
            <div className='games__div--checkout'>
            {cartItems.map(item => 
                <figure className='chekout__figure--item' key={item.id}>
                    <div className='quantity__container'>
                    </div>
                    <img src={item.img} className='chekout__img--item' alt="" />
                    <p className='section__price--videogame'>({item.quantity}) ${item.price}</p>
                </figure>)}
            </div>
            <section className='section__price'>
                    <div className='container__div--price'>
                        <p><span className='totals__span--fontweight'>Subtotal:</span> ${total.toFixed(2)}</p>
                        <p><span className='totals__span--fontweight'>Tax:</span> ${tax.toFixed(2)}</p>
                        <p><span className='totals__span--fontweight'>Shipping:</span> ${shippingCost.toFixed(2)}</p>
                        <p><span className='totals__span--fontweight'>Total:</span> ${finalTotal.toFixed(2)}</p>
                    </div>
                </section> 
                <form className='checkout__container--btn' name='submitForm' action='#' onSubmit={submitCheckoutForm}>
                    <button className='btn-success btn checkout__btn' type='submit' onClick={() => handleCartClearance()}>Submit</button>
                </form>
        </section>
    </>
  )
}

export default Checkout