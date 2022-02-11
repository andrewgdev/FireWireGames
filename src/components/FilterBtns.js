import React, { useState } from 'react'
import items from '../allData'

const FilterBtns = () => {
    const filters = ['All', ...new Set(items.map(item => item.category))];
    const [filterbtns, setFilterbtns] = useState(filters);

  return (
    <section className='section__filterbtns'>
        <div className='section__container--filterbtns'>
            <ul className='section__ul--filterbtns'>
            {filterbtns.map((item, i) => 
                <li key={i}><button className='btn-primary btn section__btn--filters' >{item}</button></li>
            )}
            </ul>
        </div>
    </section>
  )
}

// btn-primary btn section__btn--filters

export default FilterBtns