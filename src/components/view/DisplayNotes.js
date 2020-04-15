import React, { useEffect, useState, Fragment } from 'react';

const DisplayNotes = () => {
	// choosing not to use context, small app
	const [ views, setViews ] = useState(null);

	useEffect(() => {
		let savedNotes = localStorage.getItem('notes');
		if (savedNotes) {
			savedNotes = JSON.parse(savedNotes);
			console.log(savedNotes);
			setViews([ ...savedNotes ]);
		}
	}, []);

	return (
		views && (
			<Fragment>
				{views.map((el, idx) => {
					const { title, body } = el;
					return (
						<div key={idx}>
							<h2>{title}</h2>
							<div>{body}</div>
						</div>
					);
				})}
			</Fragment>
		)
	);
};

export default DisplayNotes;
