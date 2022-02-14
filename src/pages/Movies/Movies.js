import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store";
import {Movie} from "../Movie/Movie";
import './Movies.css'


const Movies = () => {

    const {movies} = useSelector(store=>store.movie);
    const dispatch = useDispatch();


    useEffect(() => {
       dispatch(getAllMovies())
    },[])

    return (
        <div>

            <div className={'Movies'}>
                {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>

        </div>


    );
};

export {Movies};