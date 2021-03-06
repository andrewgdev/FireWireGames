import { FaPlus } from 'react-icons/fa'
import '../components/styles/App.scss'
import { Link } from 'react-router-dom'

const VideoGame = ({ img, title, price, item, handleAddVideoGame}) => {



  return (
    <div className='section__videogame'>
        <div className='section__container--videogame'>
            <figure className='section__figure--videogame'>
                <div className='section__container--btn'>
                    <button className=' btn-success btn section__addbtn--videogame' 
                           onClick={() => handleAddVideoGame(item)}>
                      <FaPlus />
                    </button>
                </div>
                <img src={img} className="section__img--videogame" alt="Video Game" />
                <div className='section__description--videogame grid'>
                  <h2 className='section__title--videogame'>{title}</h2>
                  <p className='section__price--videogame'>${price}</p>
                  <Link to="checkout">
                    <button className='btn-success btn section__buybtn--videogame' 
                            onClick={() => handleAddVideoGame(item)}>BUY</button>
                  </Link>
                </div>
            </figure>
        </div>
    </div>
  )
}

export default VideoGame