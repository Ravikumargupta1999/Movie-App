import {Component} from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
    
    render() {
        // const {title,plot,price,rating,stars,fav,isIncart,poster} = this.state.movies
        const { movies,addStars,decStars,toggleFav,toggleCart } = this.props;
        console.log(this.props)

        return (
            <>

                {movies.map((movie) => <MovieCard movies={movie}
                                                  addStars={addStars}
                                                  decStars={decStars}
                                                  toggleFav={toggleFav}
                                                  toggleCart={toggleCart}
                                                    key ={movie.id}/>)}
            </>
        )
    }
}

export default MovieList;