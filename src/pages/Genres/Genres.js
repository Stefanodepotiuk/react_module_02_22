import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Genres.css'
import {getAllGenres} from "../../store";
import {GenreOne} from "../../components";

const Genres = () => {

    const {genres} = useSelector(store => store.genre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    return (
        <div className={'genres'}>
            {genres.map(genre => <GenreOne key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};