import React from 'react'

const Desc = (props) => {
    console.log(props)
    let movie = props.movies.find(el=>el.id === Number(props.match.params.id))
    return (
        <div className='desc'>
            <h2  style={{color:'white'}} >  {movie.name} </h2>
            <p  style={{color:'white'}}  >  {movie.desc} </p>
        </div>
    )
}

export default Desc
