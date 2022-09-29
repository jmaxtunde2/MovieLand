import React, {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//5e89589c
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=5e89589c';
const App = () =>{
    const [movies,setMovie] = useState([]);
    const [searchItem,setSearchItem] = useState('');
    
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);

        setMovie(data.Search);
    } 

    

    useEffect(()=>{
        searchMovies('movie');
    },[]);
    return(
            <div className="app">
                <h1>Movie Land</h1>
                <div className="search">
                    <input
                    placeholder="Search for Movies"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    />
                    <img src={SearchIcon} 
                        alt="Search"
                        onClick={() => searchMovies(searchItem)}
                    />
                </div>

                {
                    movies.length > 0 ?  
                    (
                        <div className="container">
                            {
                                movies.map((movie)=>(
                                    <MovieCard movie={movie}/>
                                )
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
                }

                
            </div>
    );
}

export default App;