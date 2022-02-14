import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies.slice";
import genresReducer from "./genres.slice";

let store = configureStore({
    reducer:{
        movie:moviesReducer,
        genre:genresReducer
    }
});

export default store;