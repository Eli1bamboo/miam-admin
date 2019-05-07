import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getRecipeDraft, getRecipeDraftIngredientDraft } from '../../store/actions/recipesActions'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Table from '../../components/Table'

const styles = {
	paper: { padding: 30, margin: '20px 0' }
}

class RecipeDraftDetail extends Component {
	componentWillMount() {
		const { getRecipeDraft, getRecipeDraftIngredientDraft, match } = this.props

		const id = match.params.id

		getRecipeDraft(id)
		getRecipeDraftIngredientDraft(id)
	}

	// componentWillReceiveProps(nextProps) {
	// 	const { getHero, match } = this.props

	// 	if (match.params.id !== nextProps.match.params.id) {
	// 		const id = nextProps.match.params.id

	// 		getHero(id)
	// 	}
	// }

	render() {
		const { data, ingredients } = this.props

		return (
			<Paper style={styles.paper} elevation={1}>
				<Typography variant="h5" component="h3">
					{data.name}
				</Typography>
				<Typography component="p">{data.content}</Typography>

				<Table data={ingredients} type={'recipe_detail'} />
			</Paper>
		)
	}
}

const mapStateToProps = (state) => {
	const { recipesReducer: { data = [], ingredients = [] } } = state

	return {
		data,
		ingredients
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRecipeDraft: (id) => dispatch(getRecipeDraft(id)),
		getRecipeDraftIngredientDraft: (id) => dispatch(getRecipeDraftIngredientDraft(id))
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RecipeDraftDetail)
