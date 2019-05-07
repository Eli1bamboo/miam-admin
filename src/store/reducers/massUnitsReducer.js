const initState = {
	isLoading: false
}

const massUnitsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_LIST_ERROR':
			console.log('error')
			return {
				...state,
				isLoading: false,
				getError: null
			}

		case 'GET_LIST_LOADING':
			console.log('loading')
			return {
				...state,
				isLoading: true,
				getError: null
			}

		case 'GET_LIST_SUCCESS':
			console.log('success')
			return {
				...state,
				data: action.data,
				isLoading: false,
				getError: null
			}
		case 'GET_RECIPE_DRAFT_ERROR':
			console.log('error')
			return {
				...state,
				isLoading: false,
				getError: null
			}

		case 'GET_RECIPE_DRAFT_LOADING':
			console.log('loading')
			return {
				...state,
				isLoading: true,
				getError: null
			}

		case 'GET_RECIPE_DRAFT_SUCCESS':
			console.log('success')
			return {
				...state,
				data: action.data,
				isLoading: false,
				getError: null
			}
		default:
			return state
	}
}

export default massUnitsReducer
