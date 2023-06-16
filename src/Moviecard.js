import { Component } from "react";

class MovieCard extends Component {
    constructor(){
        super();
        this.state = {
            title : "The Avengers!",
            plot : "Supernatutal power shown in the movie",
            price : 199,
            rating : 8.9
        }
        this.addStars = this.addStars.bind(this);
    }

    // function keyword is not required as we are using inside class
    addStars = () => {
        // console.log('Starts are Added');
        console.log('this: ',this);
        // console.log('this.state: ',this.state);

    }

    render() {
        const {title,plot,price,rating} = this.state;
        return (
            <div className="main">

                 {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="Poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>

                     {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                             {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                    alt="Decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                />
                                <img className="stars"
                                    alt="stars"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={this.addStars}
                                />
                                <span className="starCount">0</span>
                            </div>

                              {/**Favourite and add to cart buttons */}
                            <button className="favourite-btn">Favorite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;