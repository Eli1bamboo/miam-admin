import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Dashboard from './components/Dashboard'
import HeroDetail from './components/HeroDetail'
import { getList } from './store/actions/HeroesActions'
import { HeroesList } from './components/HeroesList'

class App extends Component {
	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	render() {
		const { results } = this.props

		return (
			<BrowserRouter>
				<div className="App">
					<div className="layout">
						<div className="columns">
							<HeroesList list={results} />
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route path="/hero/:id" component={HeroDetail} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => {
	const { HeroesReducer: { results = [] } } = state

	return {
		results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getList: () => dispatch(getList())
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(App)
