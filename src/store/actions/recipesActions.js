import Api from '../../Api/recipes'

export const postRecipeUrlToParser = (url) => {
	return (dispatch) => {
		dispatch({ type: 'POST_RECIPE_URL_TO_PARSER_LOADING' })

		Api.postRecipeUrlToParser(url)
			.then((res) => {
				console.log(res)

				const data = ''

				dispatch({ type: 'POST_RECIPE_URL_TO_PARSER_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'POST_RECIPE_URL_TO_PARSER_ERROR', err })
			})
	}
}

export const getList = () => {
	return (dispatch) => {
		dispatch({ type: 'GET_LIST_LOADING' })

		Api.getList()
			.then((res) => {
				const data = res.data

				dispatch({ type: 'GET_LIST_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'GET_LIST_ERROR', err })
			})
	}
}

export const getDraftsList = () => {
	return (dispatch) => {
		dispatch({ type: 'GET_DRAFT_LIST_LOADING' })

		Api.getDraftsList()
			.then((res) => {
				const data = res.data

				dispatch({ type: 'GET_DRAFT_LIST_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'GET_DRAFT_LIST_ERROR', err })
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

export const getRecipeDraftIngredientDraft = (id) => {
	return (dispatch) => {
		dispatch({ type: 'GET_RECIPE_DRAFT_INGREDIENT_LOADING' })

		Api.getRecipeDraftIngredientDraft(id)
			.then((res) => {
				const data = res.data

				dispatch({ type: 'GET_RECIPE_DRAFT_INGREDIENT_SUCCESS', data })
			})
			.catch((err) => {
				dispatch({ type: 'GET_RECIPE_DRAFT_INGREDIENT_ERROR', err })
			})
	}
}
