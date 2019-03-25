import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getHero } from '../store/actions/HeroesActions'
import { HeroCard } from './HeroCard'

class HeroDetail extends Component {
	componentWillMount() {
		const { getHero, match } = this.props

		const id = match.params.id

		getHero(id)
	}

	componentWillReceiveProps(nextProps) {
		const { getHero, match } = this.props

		if (match.params.id !== nextProps.match.params.id) {
			const id = nextProps.match.params.id

			getHero(id)
		}
	}

	render() {
		const { hero, isLoading } = this.props

		return isLoading ? <p>Loading...</p> : <HeroCard hero={hero} />
	}
}

const mapStateToProps = (state) => {
	const { HeroesReducer: { hero, isLoading } } = state

	return {
		hero,
		isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getHero: (id) => dispatch(getHero(id))
	}
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(HeroDetail)
