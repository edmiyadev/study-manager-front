import { getEnvVariables } from "@/helpers/getEnvVariables";
import axios from "axios";

const { VITE_API_URL } = getEnvVariables();

export const studyManagerApi = axios.create({
  baseURL: VITE_API_URL,
});

// Todo: config interceptors
studyManagerApi.interceptors.request.use(config =>{

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    return config;
})

export default studyManagerApi;