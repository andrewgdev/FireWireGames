import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  
    return (
        <header className='header__'>
            <h1 className='header__h1--title'>FireWire</h1>
            <button className='btn-primary btn header__btn--cartbtn'><FaShoppingCart /></button>
        </header>
  )
}

export default Header