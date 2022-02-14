import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'getMovies'}>Movies</NavLink>
            <NavLink to={'getGenres'}>Generes</NavLink>

        </div>
    );
};

export {Header};