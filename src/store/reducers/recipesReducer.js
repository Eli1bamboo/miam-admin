const initState = {
	isLoading: false
}

const recipesReducer = (state = initState, action) => {
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
		case 'GET_DRAFT_LIST_ERROR':
			console.log('error')
			return {
				...state,
				isLoading: false,
				getError: null
			}

		case 'GET_DRAFT_LIST_LOADING':
			console.log('loading')
			return {
				...state,
				isLoading: true,
				getError: null
			}

		case 'GET_DRAFT_LIST_SUCCESS':
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
		case 'GET_RECIPE_DRAFT_INGREDIENT_ERROR':
			console.log('error')
			return {
				...state,
				isLoading: false,
				getError: null
			}

		case 'GET_RECIPE_DRAFT_INGREDIENT_LOADING':
			console.log('loading')
			return {
				...state,
				isLoading: true,
				getError: null
			}

		case 'GET_RECIPE_DRAFT_INGREDIENT_SUCCESS':
			console.log('success')
			return {
				...state,
				ingredients: action.data,
				isLoading: false,
				getError: null
			}
		default:
			return state
	}
}

export default recipesReducer
