import axios from 'axios'

const API_KEY = '665ecfc74f1fbb2a403da681dad487f4'

const apiClient = axios.create({
	baseURL: 'http://gateway.marvel.com'
})

export default {
	getList() {
		return apiClient.get('/v1/public/characters', {
			params: {
				apikey: API_KEY
			}
		})
	},
	getHero(id) {
		return apiClient.get('/v1/public/characters/' + id, {
			params: {
				apikey: API_KEY
			}
		})
	}
}
