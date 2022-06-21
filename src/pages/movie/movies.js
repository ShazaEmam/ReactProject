import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios config/axiosInstance';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Movie = () => {

    const imageURL = "https://image.tmdb.org/t/p/w500/";
    const LoaderState = useSelector((state) => state.loader.isLoading)
    const [movies, setMovies] = useState([]);
    const [page,setPage]=useState(1);
   
    useEffect(() => {
        axiosInstance
            .get(`/movie/popular?&page=${page}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);
   

    return (
        <div style={{ backgroundColor: "black" }}>
              {LoaderState && <div className="d-flex justify-content-center text-light mt-4">
                    <div className="spinner-grow " role="status"></div>
                </div>}
            <div className="container  text-light" style={{ margin: "auto", backgroundColor: "black" }}>
                <div className="row row-cols-3 " style={{ paddingTop: "3%", justifyContent: "center" }}>

                    {movies.map((mov) => {
                        return (
                            <div className="card m-2 p-4 col bg-dark border " key={mov.id} style={{ width: "350px" }}>
                                <img src={imageURL + mov.backdrop_path} className="card-img-top "  alt={mov.title} style={{ height: "200px" }} />
                                <div className="card-body text-center ">
                                    <h5 className="card-title ">{mov.title}</h5>
                                </div>
                                <div className='text-center'>
                                    <Link to={`/details/${mov.id}`} className="btn btn-outline-light" style={{ width: "250px" }}>More Details</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=' justify-content-evenly d-flex p-5 mx-5' style={{backgroundColor:"black"}}>
               <button className='btn btn-outline-warning mx-3' onClick={()=>setPage(page-1)}>Previous</button>
               <button className='btn btn-outline-warning mx-3' onClick={()=>setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}
export default Movie;