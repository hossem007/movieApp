import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';
import MovieList from './Components/MovieList';
import Search from './Components/Search';
import AddMovie from './Components/AddMovie';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Desc from './Components/Desc';

function App() {

  const [movies, setMovies] = useState(moviesData)
  const handleAdd = (newMovie)=>setMovies([...movies,newMovie])
  const [text, setText] = useState('')
  const [rating, setRating] = useState(1)
  const handleChange = (e)=>setText(e.target.value)
  const handleRating = (x)=>setRating(x)
  return (
    <div className="App">
     
      <BrowserRouter>

              
          <Search text={text} change={handleChange} rating={rating} handleRating={handleRating} />
        <Switch>   
          
           <Route exact path='/' render={()=>
          <MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating)}/>
          }/>
          <Route path="/movie/:id" render={(props)=>
          <Desc movies={movies} {...props} />
        }
        />
          <AddMovie add={handleAdd}/>
       

           

    </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
