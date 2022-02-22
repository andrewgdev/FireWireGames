import VideoGame from './VideoGame';

const GamesList = ({ games, handleAddVideoGame }) => {



  return (
    <section>
        {
          games.map(item => <VideoGame 
            key={item.id} 
            img={item.img} 
            title={item.title} 
            price={item.price}
            item={item} 
            handleAddVideoGame={handleAddVideoGame}/>)
        }
    </section>
  )
}

export default GamesList