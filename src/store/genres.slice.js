import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {generesService} from "../services/genres.service";

const initialState = {

    genres: [],
    status: null,
    error: null

}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await generesService.getAll().then(value => value.genres);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


let genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getAllGenres.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.genres = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {

        }
    }
});
let genresReducer = genresSlice.reducer;

export default genresReducer;