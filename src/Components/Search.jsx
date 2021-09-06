import React from 'react'
import StarRating from './StarRating'

const Search = ({text,change,rating,handleRating}) => {
    return (
        <div className='header-container'>
            <h1 className='our'>Our movie app</h1>
            <div className='search-container'>
                <input className='input1' type="text" value={text} onChange={change} />
                 <p className='src'><StarRating rating={rating} handleRating={handleRating} /></p>
               
            </div>
            
        </div>
    )
}

export default Search
