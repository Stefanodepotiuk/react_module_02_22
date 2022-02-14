import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";


const initialState = {
    movies: [],
    status:null,
    error:null
}

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await moviesService.getAll().then(value => value.results);

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
                state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {

        }
    }
});
let moviesReducer = moviesSlice.reducer;

export default moviesReducer;