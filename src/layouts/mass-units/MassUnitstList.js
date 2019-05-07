import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getList } from '../../store/actions/massUnitsActions'
import Table from '../../components/Table'

class MassUnitstList extends Component {
	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	render() {
		const { data } = this.props

		return (
			<div>
				<Table data={data} detailPath={'/recipes/draft/'} title={'Mass Units List'} type={'mass_units_list'} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { massUnitsReducer: { data = [] } } = state

	return {
		data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getList: () => dispatch(getList())
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MassUnitstList)
