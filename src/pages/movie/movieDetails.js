import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";
import { useSelector } from 'react-redux';
const MovieDetails = (props) => {

    console.log(props);
    const params = useParams();
    const imageURL = "https://image.tmdb.org/t/p/w500/";
    const LoaderState = useSelector((state) => state.loader.isLoading)
    const [movie, setMovie] = useState({});
    useEffect(() => {
        axiosInstance
            .get(`/movie/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setMovie(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const imageSrc = imageURL + movie.backdrop_path;
    return (
        <div style={{ backgroundColor: "black" }}>

            {LoaderState && <div className="d-flex justify-content-center text-light mt-4">
                <div className="spinner-grow " role="status"></div>
            </div>}
            <div className=" row d-flex flex-wrap text-light container p-4" style={{ margin: "auto", backgroundColor: "black" }} >

                <div className=" col-4 rounded-pill justfiy-content-center text-center p-4">
                    <img src={imageSrc}  alt={movie.title} style={{ width: "100%", height: "400px", borderRadius: "30px" }} />
                </div>
                <div className="col-8 p-4 " >
                    <h3 className="text-warning text-uppercase">
                        {movie.title}
                    </h3>
                    <div>

                        <h6>{movie.original_title}
                            {/*  <span className="p-3">({movie.release_date.slice(0, 4)})</span> */}
                        </h6>

                    </div>
                    <div className="pt-4">
                        <h5>OverView</h5>
                        <p>
                            {movie.overview}
                        </p>
                    </div>

                    <div className="pt-4">
                        <span className="p-3"><i class="fa fa-list-ol" aria-hidden="true"></i> Popularity : {movie.popularity}</span>
                        <br />
                        <span className="p-3"><i class="fa fa-star text-warning" aria-hidden="true"></i> Vote Average : {movie.vote_average}</span>
                        <br />
                        <span className="p-3"><i class="fa fa-plus-circle " aria-hidden="true"></i> Vote Count : {movie.vote_count}</span>
                    </div>
                    <div className="pt-4 d-flex justify-content-end">
                        <Link to={`/movies`} className="btn btn-outline-warning" >Back To Movies</Link>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default MovieDetails;
