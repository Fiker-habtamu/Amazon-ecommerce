import axios from 'axios'

const axiosInstant = axios.create({
	baseURL:`https://amazon-ecommerce-api.onrender.com`
})

export {axiosInstant}