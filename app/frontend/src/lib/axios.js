import Axios from "axios";


const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
})


export default axios;