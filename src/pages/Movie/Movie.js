import React from 'react';

import './Movie.css'
import {Link} from "react-router-dom";

const Movie = ({movie}) => {

    const {id, original_title, backdrop_path} = movie;

    return (


        <div className={'movieStyleOne'}>
            <img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} className={'photo_1'} alt="spider"/>
            <div className={'movieTitle'}>

                <div>{original_title}</div>
                <Link to={id.toString()} state={movie}>
                    <button>Details</button>
                </Link>

            </div>
        </div>


    );
};

export {Movie};