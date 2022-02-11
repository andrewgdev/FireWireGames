import { useState } from "react";
import items from "../allData";

const FilterBtns = ({ filterGames }) => {
  const filters = ['All', ...new Set(items.map(item => item.category))];

  const [filterbtns] = useState(filters);
    

  return (
    <section className='section__filterbtns'>
        <div className='section__container--filterbtns'>
            <ul className='section__ul--filterbtns'>
            {filterbtns.map((item, i) => 
                <li key={i}><button className='btn-primary btn section__btn--filters' onClick={() => filterGames(item)} >{item}</button></li>
            )}
            </ul>
        </div>
    </section>
  )
}


export default FilterBtns