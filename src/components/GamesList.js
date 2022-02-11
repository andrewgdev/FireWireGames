import React, { useState } from 'react'
import items from '../allData'
import VideoGame from './VideoGame';

const GamesList = () => {
    const [games, setGames] = useState(items);


  return (
    <section className='section__gameslist'>
        <div className='section__container--gameslist container'>
            {
                games.map(item => <VideoGame img={item.img} />)
            }
        </div>
    </section>
  )
}

export default GamesList