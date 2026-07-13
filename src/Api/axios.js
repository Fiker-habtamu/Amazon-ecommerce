import axios from 'axios'

const axiosInstant = axios.create({
	baseURL:`http://localhost:5000/${import.meta.env.VITE_BACKEND_PORT}`
})