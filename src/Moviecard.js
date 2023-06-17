function MovieCard (props){
// class MovieCard extends React.Component {

   
        const { movies, addStars, decStars, toggleFav, toggleCart } = props
        
        const { title, plot,price, rating, stars, fav, isInCart } = props.movies;

        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                  
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn"
                                    alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                    onClick={() => {decStars(movies)}}
                                />
                                <img alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                    className="stars"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={() => {addStars(movies)}}/>

                                <span className="starCount">{stars}</span>

                            </div>
                               {/**Favourite and add to cart buttons */}
                               {/* {
                                fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favorite</button> :
                                    <button className="favourite-btn" onClick={this.handleFav}>Favorite</button>
                            } */}
                            <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                            onClick={() => {toggleFav(movies)}}>{fav ? "Un-favourite" : "Favourite"}

                            </button>

                            <button className={isInCart ? "unfavourite-btn" : "cart-btn"}
                            onClick={() => {toggleCart(movies)}}>
                            {isInCart ? "Remove from Cart" : "Add to Cart"}</button>
                        </div>
                    </div>

                </div>
            </div>


        )
    
}

export default MovieCard;


// import { Component } from "react";

// class MovieCard extends Component {
//     // function keyword is not required as we are using inside class
//     addStars = () => {

//         //Condition to stop the stars from increasing beyond 5
//         if (this.state.star >= 5) {
//             return
//         }
//         // //Form 1 of setState() - increasing the star count by 0.5
//         // this.setState({
//         //     star: this.state.star + 0.5
//         // })

//         //Form 2 of setState() - increasing the star count by 0.5
        
//         this.setState((prevState) => {
//             return {
//                 star: prevState + 0.5
//             }
//         })
         

//     }


//     decStars = () => {
//         // form 1
//         if (this.state.stars <= 0) {
//             return;
//         }
//         this.setState({
//             stars: this.state.stars - 0.5
//         });


//     }

//     handleFav = () => {
//         this.setState({
//             fav: !this.state.fav
//         })
//     }

//     //Toggle add to cart button
//     handleAddToCart = () => {
//         this.setState({
//             isIncart: !this.state.isIncart
//         })
//     }

//     render() {
//         console.log(this.props);
//         const { title, plot, price, rating, stars, fav, isIncart } = this.props.movies;
//         return (
//             <div className="main">
//                 <div className="movie-card">

                    // <div className="left">
                    //     <img alt="Poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    // </div>

//                     {/**Right section Movie Card */}
//                     <div className="right">

//                         {/**Title, plot, price of the movie */}
//                         <div className="title">{title}</div>
//                         <div className="plot">{plot}</div>
//                         <div className="price">{price}</div>

//                         {/**Footer starts here with ratings, stars and buttons */}
//                         <div className="footer">
//                             <div className="rating">{rating}</div>

//                             {/**Star image with increase and decrease buttons and star count */}
//                             <div className="star-dis">
//                                 <img className="str-btn"
//                                     alt="Decrease"
//                                     src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
//                                     onClick={this.decStars}
//                                 />
//                                 <img className="stars"
//                                     alt="stars"
//                                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
//                                 />
//                                 <img className="str-btn"
//                                     alt="increase"
//                                     src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
//                                     onClick={this.addStars}
//                                 />
//                                 <span className="starCount">{stars}</span>
//                             </div>

                            // {/**Favourite and add to cart buttons */}
                            // {/* {
                            //     fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favorite</button> :
                            //         <button className="favourite-btn" onClick={this.handleFav}>Favorite</button>
                            // } */}

//                             <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "unfavourite" : "favourite"}</button>




//                             {/* <button className="cart-btn">Add to cart</button>
//                              */}
//                             {/**Conditional Rendering on Add to Cart Button */}
//                             <button className={isIncart ? "unfavourite-btn" : "cart-btn"} onClick={this.handleAddToCart}>
//                                 {isIncart ? "Remove from Cart" : "Add to Cart"}
//                             </button>


//                         </div>

//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default MovieCard;