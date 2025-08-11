import MovieCard from '../components/MovieCard'
import React, { useState, useEffect } from 'react'
import { searchMovies, popularMovies } from '../services/api'
import '../css/Home.css'

function Home() {

    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () => {
            try{
                const popMovies = await popularMovies();
                setMovies(popMovies);
            }
            catch(err){
                console.log(err); 
                setError("Failed to load Movies...");
            }
            finally{
                setIsLoading(false);
            }
        }

        loadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchQuery.trim()) return
        if(isLoading) return

        setIsLoading(true)

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch(err){
            console.log(err);
            setError("failed to search Movies...")
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">

                <input 
                    type="text" 
                    className='search-input'
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {isLoading ? <div className='loading'>Data is Loading...</div> 
            : 
            (
                <div className="movies-grid">
                    {
                        movies.map(mov => (<MovieCard movie={mov} key={mov.id} />))
                    }
                </div>
            )}

        </div>
    )
}

export default Home;