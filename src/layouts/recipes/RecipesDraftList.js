import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getDraftsList } from '../../store/actions/recipesActions'
import Table from '../../components/Table'

class RecipesDraftList extends Component {
	componentWillMount() {
		const { getDraftsList } = this.props

		getDraftsList()
	}

	handleOnRowClick = (rowData) => {
		const { history } = this.props

		const id = rowData[0]

		history.push('/recipes/draft/' + id)
	}

	render() {
		const { data } = this.props

		return (
			<div>
				<Table
					data={data}
					onRowClick={this.handleOnRowClick}
					title={'Recipes Drafts List'}
					type={'recipes_drafts_list'}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { recipesReducer: { data = [] } } = state

	return {
		data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getDraftsList: () => dispatch(getDraftsList())
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RecipesDraftList)
