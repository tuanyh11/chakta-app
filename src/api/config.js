import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
})

export default axiosInstance;