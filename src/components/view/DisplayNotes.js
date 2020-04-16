import React, { Fragment } from 'react';

const DisplayNotes = ({ setNote, notes }) => {
	// choosing not to use context, small app

	const updateNote = () => {};

	function deleteNote(id) {
		console.log(id);

		const update = notes.filter((el) => el._id !== id);

		setNote([ ...update ]);
	}

	return (
		notes && (
			<Fragment>
				{notes.map((el, idx) => {
					const { title, body } = el;
					return (
						<div key={idx}>
							<h2>{title}</h2>
							<div>{body}</div>
							<button>Edit</button>
							<button onClick={deleteNote.bind(null, idx)}>Delete</button>
						</div>
					);
				})}
			</Fragment>
		)
	);
};

export default DisplayNotes;
