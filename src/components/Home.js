import Header from './Header'
import Main from './Main'

const Home = ({ handleAddVideoGame }) => {
    return (
        <div>
            <Header />
            <Main handleAddVideoGame={handleAddVideoGame} />
        </div>
  )
}

export default Home