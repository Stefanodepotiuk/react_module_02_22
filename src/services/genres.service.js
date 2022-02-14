import {axiosServices} from "./axios.service";
import {API_KEY,urls} from "../constans";




export const generesService = {
    getAll: () => axiosServices.get(`${urls.genresAll}?api_key=${API_KEY}`).then(value => value.data)
}