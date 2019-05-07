import { apiClient } from './config'

export default {
	getList() {
		return apiClient.get('/v1/mass_units')
	},
	getMassUnitVolumeUnits(id) {
		return apiClient.get('/v1/mass_unit/volume_units', {
			params: {
				massUnitId: id
			}
		})
	}
}
