import {axiosServices} from "./axios.service";
import {API_KEY, urls} from "../constans";

export const moviesService = {
    getAll: () => axiosServices.get(`${urls.movies}?api_key=${API_KEY}`).then(value => value.data),
    getByID: (id) => axiosServices.get(`${urls.moviesOne}/${id}?api_key=${API_KEY}`).then(value => value.data)
}
