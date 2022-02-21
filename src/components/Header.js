import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  
    return (
        <header className='header__'>
            <Link to="/"><h1 className='header__h1--title'>FireWire</h1></Link>
            <Link to='/cart/'>
                <button className='btn-primary btn header__btn--cartbtn'><FaShoppingCart /></button>
            </Link>
        </header>
  )
}

export default Header