import axios from 'axios'

const axiosInstant = axios.create({
	baseURL:`http://localhost:${import.meta.env.VITE_BACKEND_PORT}`
})

export {axiosInstant}