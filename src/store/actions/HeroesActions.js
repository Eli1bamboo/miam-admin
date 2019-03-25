import Api from '../../Api'

export const getList = () => {
	return (dispatch) => {
		dispatch({ type: 'GETLIST_LOADING' })

		Api.getList()
			.then((response) => {
				const results = response.data.data.results

				dispatch({ type: 'GETLIST_SUCCESS', results })
			})
			.catch((err) => {
				dispatch({ type: 'GETLIST_ERROR', err })
			})
	}
}

export const getHero = (id) => {
	return (dispatch) => {
		dispatch({ type: 'GETHERO_LOADING' })

		Api.getHero(id)
			.then((response) => {
				const results = response.data.data.results

				dispatch({ type: 'GETHERO_SUCCESS', results })
			})
			.catch((err) => {
				dispatch({ type: 'GETHERO_ERROR', err })
			})
	}
}
