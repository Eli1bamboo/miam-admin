import React, { Component } from 'react'
import MUIDataTable from 'mui-datatables'
import { tableDataFormatter, newData as formattedData } from '../utils/tableDataFormatter'

class Table extends Component {
	constructor(props) {
		super(props)

		this.state = {
			columns: [],
			tableRowData: [],
			options: {}
		}
	}

	componentWillReceiveProps(nextProps) {
		const { type } = this.props

		const tableData = nextProps.data

		const onRowClick = nextProps.onRowClick ? nextProps.onRowClick : null

		const unformattedData = { tableData, type, onRowClick }

		tableDataFormatter(unformattedData)

		console.log('newData en component ', tableData)

		this.setState({
			columns: formattedData.columns,
			tableRowData: formattedData.tableRowData,
			options: formattedData.options
		})
	}

	render() {
		const { tableRowData, columns, options } = this.state
		const { title } = this.props

		return (
			<div>
				<MUIDataTable title={title} data={tableRowData} columns={columns} options={options} />
			</div>
		)
	}
}

export default Table
