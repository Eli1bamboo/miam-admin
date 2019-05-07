import { apiClient } from './config'

var headers = {
	'Content-Type': 'application/json',
	Accept: '*/*',
	'Access-Control-Max-Age': 6000
}

export default {
	getList() {
		return apiClient.get('/v1/recipes/paginated')
	},
	getDraftsList() {
		return apiClient.get('/v1/recipe_draft/list')
	},
	getRecipeDraft(id) {
		return apiClient.get('/v1/recipe_draft', {
			params: {
				recipeDraftId: id
			}
		})
	},
	getRecipeDraftIngredientDraft(id) {
		return apiClient.get('/v1/recipe_draft/ingredient_draft', {
			params: {
				recipeDraftId: id
			}
		})
	},
	postRecipeUrlToParser(url) {
		return apiClient.post('/v1/recipes/parse', { recipeUrl: url }, { headers: headers })
	}
}
