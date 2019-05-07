import Api from '../../Api/massUnits'

export const getList = () => {
	return (dispatch) => {
		dispatch({ type: 'GET_LIST_LOADING' })

		Api.getList()
			.then((res) => {
				const data = res.data

				console.log(data)

				dispatch({ type: 'GET_LIST_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'GET_LIST_ERROR', err })
			})
	}
}

export const getRecipeDraft = (id) => {
	return (dispatch) => {
		dispatch({ type: 'GET_RECIPE_DRAFT_LOADING' })

		Api.getRecipeDraft(id)
			.then((res) => {
				const data = res.data

				dispatch({ type: 'GET_RECIPE_DRAFT_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'GET_RECIPE_DRAFT_ERROR', err })
			})
	}
}
