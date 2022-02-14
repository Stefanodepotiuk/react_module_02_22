import React from 'react';
import {Link, useLocation} from "react-router-dom";

import './Details.css'

const MovieDetails = () => {

    const {
        state: {
            overview,
            original_language,
            original_title,
            popularity,
            poster_path,
            release_date,
            vote_average,
            vote_count,
        }
    } = useLocation();

    return (
        <div className={'detail'}>

            <div><img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="spider"/></div>

            <div className={'info'}>

                <h2>Title : {original_title}</h2>
                <h3>Overview :</h3>
                <div>Overview : {overview}</div>

                <ul>

                    <li>Original language : {original_language}</li>
                    <li>Popularity: {popularity}</li>
                    <li>Release date : {release_date}</li>
                    <li>Vote average : {vote_average}</li>
                    <li>Vote count : {vote_count}</li>

                </ul>

            </div>


        </div>
    );
};

export {MovieDetails};