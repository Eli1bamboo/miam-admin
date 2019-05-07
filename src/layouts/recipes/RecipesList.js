import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getList } from '../../store/actions/recipesActions'
import Table from '../../components/Table'

class RecipesList extends Component {
	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	render() {
		const { data } = this.props

		return (
			<div>
				<Table data={data} onRowClick={null} title={'Recipes List'} type={'recipes_list'} />
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
		getList: () => dispatch(getList())
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RecipesList)
