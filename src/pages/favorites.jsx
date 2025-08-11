import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites(){
    const {favorites} = useMovieContext();

    if (favorites.length > 0){
        return (
            <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {
                    favorites.map(mov => (<MovieCard movie={mov} key={mov.id} />
                ))}
            </div>
            </div>
        )
    }
    else {
        return <div className='favorites-empty'>
            <h2>No Favorites Yet</h2>
            <p>Add in movies to favorites to appear here!</p>
        </div>
    }
}

export default Favorites;