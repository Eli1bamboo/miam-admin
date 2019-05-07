import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { postRecipeUrlToParser } from '../../store/actions/recipesActions'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
	paper: { padding: 30, margin: '20px 0' },
	button: { marginTop: 12 }
}

class AddRecipeDraft extends Component {
	state = {
		url: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		const { postRecipeUrlToParser } = this.props
		const { url } = this.state
		e.preventDefault()

		postRecipeUrlToParser(url)
	}

	render() {
		return (
			<Paper style={styles.paper} elevation={1}>
				<Typography variant="h5" component="h3">
					Add Recipe Draft
				</Typography>
				<form onSubmit={this.handleSubmit}>
					<TextField id="url" label="URL" fullWidth onChange={this.handleChange} margin="normal" required />
					<Button variant="contained" color="primary" style={styles.button} type="submit">
						Primary
					</Button>
				</form>
			</Paper>
		)
	}
}
const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch) => {
	return {
		postRecipeUrlToParser: (url) => dispatch(postRecipeUrlToParser(url))
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(AddRecipeDraft)
