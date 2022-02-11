import React from 'react'

const VideoGame = ({ img }) => {
  return (
    <div className='section__videogame'>
        <div className='section__container--videogame'>
            <figure className='section__figure--videogame'>
                <img src={img} className="section__img--videogame" alt="Video Game" />
            </figure>
        </div>
    </div>
  )
}

export default VideoGame