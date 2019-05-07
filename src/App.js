import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Navigation from './components/Navigation'
import Dashboard from './layouts/Dashboard'

//RECIPES
import AddRecipeDraft from './layouts/recipes/AddRecipeDraft'
import RecipesList from './layouts/recipes/RecipesList'
import RecipesDraftList from './layouts/recipes/RecipesDraftList'
import RecipeDraftDetail from './layouts/recipes/RecipeDraftDetail'

//MASS UNITS
import MassUnitstList from './layouts/mass-units/MassUnitstList'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false
		}
	}
	handleDrawer = () => {
		const { open } = this.state

		this.setState({
			open: !!!open
		})
	}

	render() {
		const { open } = this.state

		return (
			<BrowserRouter>
				<div className="App">
					<AppBar position="static">
						<Toolbar variant="dense">
							<IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawer}>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit">
								MIAM
							</Typography>
						</Toolbar>
					</AppBar>

					<Navigation open={open} onHandleDrawer={this.handleDrawer} />

					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/recipes/list" component={RecipesList} />
						<Route path="/recipes/drafts/add" component={AddRecipeDraft} />
						<Route path="/recipes/drafts/list" component={RecipesDraftList} />
						<Route path="/recipes/draft/:id" component={RecipeDraftDetail} />
						<Route path="/mass-units/list" component={MassUnitstList} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
