import axios from 'axios'

export const apiClient = axios.create({
	baseURL: 'http://localhost:4000/app_dev.php/api'
})
