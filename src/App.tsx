import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {Genres, MovieDetails, Movies} from "./pages";


const App = () => {
    return (

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Movies/>}/>
                    <Route path={'getMovies'} element={<Movies/>}/>
                    <Route path={'getMovies/:id'} element={<MovieDetails/>}/>
                    <Route path={'getGenres'} element={<Genres/>}/>

                </Route>
            </Routes>

    );
};

export default App;