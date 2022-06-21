import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from 'react';
import axiosInstance from "../../axios config/axiosInstance";
const Home = () => {
    const [movies, setMovies] = useState([]);

    const Img_URL = "https://image.tmdb.org/t/p/w500/";

    /*      const LoaderState= useSelector((state)=>state.loader.isLoading)  */

    useEffect(() => {

        axiosInstance


            .get("/movie/popular")

            .then((res) => {

                console.log(res.data.results);

                setMovies(res.data.results);

            })

            .catch((err) => {

                console.log(err);

            });

    }, []);

    return (

        <div className="text-light " style={{ backgroundColor: "black" }}>
            <div className="container-fluid row row-cols-1 row-cols-md-2 " style={{ backgroundColor: "black" }}>
                <div className="col-md-6 p-5 ">
                    <div>
                        <h1 className=" bold" style={{ fontSize: "62px" }}>Watch
                            <span className="text-warning">IT</span>
                        </h1>
                        <h1> Watch what You <span className="text-warning">Like </span>
                            at the Time You <span className="text-warning">Like </span>
                        </h1>
                    </div>

                </div>

                <div className="col-md-6 d-flex justify-content-center p-3">
                    <Carousel  >
                        {movies.map((movies) => {
                            return (
                                <Carousel.Item interval={500} key={movies.id}>
                                    <img
                                        className=" w-100 justify-content-center"
                                        src={Img_URL + movies.backdrop_path}
                                        alt={movies.title}
                                        style={{ height: "400px" }}
                                    />
                                    <Carousel.Caption></Carousel.Caption>

                                </Carousel.Item>

                            )
                        })}
                    </Carousel>
                </div>
            </div>

        </div>

    );
}
export default Home;