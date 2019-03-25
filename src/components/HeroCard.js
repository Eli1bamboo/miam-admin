import React from 'react'

export const HeroCard = (props) => {
	const { hero } = props

	if (hero && hero.id) {
		return (
			<div className="heroCard">
				<div className="cardHeader">
					<img src={hero.thumbnail.path + '/landscape_large.' + hero.thumbnail.extension} alt={hero.name} />
					<h2>{hero.name}</h2>
				</div>
				<div className="cardBody">
					{hero.description ? (
						<div>
							<p>Hero Description</p>
							<span>{hero.description}</span>
						</div>
					) : null}
					{hero.urls.length ? (
						<div>
							<p>Useful Links</p>
							{hero.urls.forEach((url) => {
								return (
									<p>
										{url.type}:{' '}
										<a href={url.url} target="_blank" rel="noopener noreferrer">
											View link
										</a>
									</p>
								)
							})}
						</div>
					) : null}
				</div>
			</div>
		)
	}

	return null
}
