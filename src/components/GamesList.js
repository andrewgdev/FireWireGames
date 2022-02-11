import VideoGame from './VideoGame';

const GamesList = ({ games }) => {



  return (
    <section className='section__gameslist'>
        <div className='section__container--gameslist container'>
            {
              games.map(item => <VideoGame 
                key={item.id} 
                img={item.img} 
                title={item.title} 
                price={item.price} />)
            }
        </div>
    </section>
  )
}

export default GamesList