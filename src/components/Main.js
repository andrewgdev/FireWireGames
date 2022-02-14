import React from 'react'
import FilterBtns from './FilterBtns'
import GamesList from './GamesList'
import items from '../allData'
import { useState } from 'react'

const Main = ({ handleAddVideoGame }) => {

  const [games, setGames] = useState(items);

  const filterGames = (btn) => {
    if(btn === 'All') {
      setGames(items);
      return;
    }
    const filterGameData = items.filter(item => item.category === btn);  
    setGames(filterGameData);
  }
    


  return (
    <main>
        <FilterBtns filterGames={filterGames}  />
        <GamesList games={games} handleAddVideoGame={handleAddVideoGame} />
    </main>
  )
}

export default Main