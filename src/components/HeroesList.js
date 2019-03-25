import React from 'react'
import { Link } from 'react-router-dom'

export const HeroesList = (props) => {
	const { list } = props

	return (
		<div className="heroesList">
			{list.map((hero) => (
				<Link className="heroRow" to={`/hero/${hero.id}`} key={hero.id}>
					<div>
						<img
							src={hero.thumbnail.path + '/portrait_small.' + hero.thumbnail.extension}
							alt={hero.name}
						/>
					</div>
					<div>
						<p>
							Hero Name:<br />
							{hero.name}
						</p>
					</div>
					<div className="heroData">
						<div>
							<p>
								appears in any comics:<br /> {hero.comics.available > 0 ? 'Yes' : 'No'}
							</p>
						</div>
						<div>
							<p>
								appears in any series:<br /> {hero.series.available > 0 ? 'Yes' : 'No'}
							</p>
						</div>
						<div>
							<p>
								appears in any event:<br /> {hero.events.available > 0 ? 'Yes' : 'No'}
							</p>
						</div>
						<div>
							<p>
								appears in any story:<br /> {hero.stories.available > 0 ? 'Yes' : 'No'}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}
