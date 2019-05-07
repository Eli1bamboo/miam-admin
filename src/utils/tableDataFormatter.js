let newData = []

const tableDataFormatter = (data) => {
	let columns = []
	let tableRowData = []
	let options = {}
	let getTableRowData

	switch (data.type) {
		case 'recipes_list':
			console.log(data)

			columns = [
				{
					name: 'id',
					label: 'ID',
					options: {
						filter: true,
						sort: true,
						sortDirection: 'desc'
					}
				},
				{
					name: 'name',
					label: 'Name',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'cookingMinutes',
					label: 'Cooking Minutes',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'preparingMinutes',
					label: 'Preparing Minutes',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'readyMinutes',
					label: 'Ready Minutes',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'published',
					label: 'Published',
					options: {
						filter: true,
						sort: true
					}
				}
			]

			getTableRowData = data.tableData.forEach((item) => {
				const { id, name, cookingMinutes, preparingMinutes, readyMinutes, published } = item

				tableRowData.push({
					id,
					name: name ? name : 'Not Found',
					cookingMinutes: cookingMinutes ? cookingMinutes : 'Not Found',
					preparingMinutes: preparingMinutes ? preparingMinutes : 'Not Found',
					readyMinutes: readyMinutes ? readyMinutes : 'Not Found',
					published: published ? 'Published' : 'Not Published'
				})
			})

			options = {
				selectableRows: false,
				onRowClick: data.onRowClick
			}

			newData = { columns, tableRowData, options }

			return newData

		case 'recipes_drafts_list':
			columns = [
				{
					name: 'id',
					label: 'ID',
					options: {
						filter: true,
						sort: true,
						sortDirection: 'desc'
					}
				},
				{
					name: 'name',
					label: 'Name',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'preparingTime',
					label: 'Preparing Time',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'totalTime',
					label: 'Total Time',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'published',
					label: 'Published',
					options: {
						filter: true,
						sort: true
					}
				}
			]

			getTableRowData = data.tableData.forEach((item) => {
				const { id, name, preparingTime, totalTime, published } = item

				tableRowData.push({
					id,
					name: name ? name : 'Not Found',
					preparingTime: preparingTime ? preparingTime : 'Not Found',
					totalTime: totalTime ? totalTime : 'Not Found',
					published: published ? 'Published' : 'Not Published'
				})
			})

			options = {
				selectableRows: false,
				onRowClick: data.onRowClick
			}

			newData = { columns, tableRowData, options }

			return newData

		case 'recipe_detail':
			columns = [
				{
					name: 'id',
					label: 'ID',
					options: {
						filter: true,
						sort: true,
						sortDirection: 'desc'
					}
				},
				{
					name: 'name',
					label: 'Name',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'quantity',
					label: 'Quantity',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'volumeUnit',
					label: 'Volume Unit',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'fraction',
					label: 'Fraction',
					options: {
						filter: true,
						sort: true
					}
				}
			]

			getTableRowData = data.tableData.forEach((item) => {
				const { id, ingredient, quantity, volumeUnit, fraction } = item

				tableRowData.push({
					id,
					name: ingredient && ingredient.name && ingredient.name.length ? ingredient.name : 'Not Found',
					quantity: quantity ? quantity : 'Not Found',
					volumeUnit: volumeUnit ? volumeUnit : 'Not Found',
					fraction: fraction ? fraction : 'No Found'
				})
			})

			options = { selectableRows: false }

			newData = { columns, tableRowData, options }

			return newData

		case 'mass_units_list':
			columns = [
				{
					name: 'id',
					label: 'ID',
					options: {
						filter: true,
						sort: true,
						sortDirection: 'desc'
					}
				},
				{
					name: 'name',
					label: 'Name',
					options: {
						filter: true,
						sort: true
					}
				},
				{
					name: 'unitConversions',
					label: 'Unit Conversions',
					options: {
						filter: true,
						sort: true
					}
				}
			]

			getTableRowData = data.tableData.forEach((item) => {
				const { id, name, unitConversions } = item

				let unitConversionsString = unitConversions.forEach((unit) => {
					console.log(unit)
				})

				tableRowData.push({
					id,
					name: name ? name : 'Not Found',
					unitConversions: unitConversions && unitConversions.length ? unitConversionsString : 'Not Found'
				})
			})

			options = { selectableRows: false }

			newData = { columns, tableRowData, options }

			return newData

		default:
			return newData
	}
}

export { tableDataFormatter, newData }
