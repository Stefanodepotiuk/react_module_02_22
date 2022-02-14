import axios from "axios";
import baseURL from "../constans/urls";


const axiosServices = axios.create({baseURL});

export {axiosServices};