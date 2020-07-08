import React, { Fragment } from 'react';

const DisplayNotes = ({ notes, setNote }) => {
	// choosing not to use context, small app

	const updateNote = (id) => {
		// const oldNote =	notes.find((el) => el.id === id )
		// const newNote ={...oldNote}
	};

	const deleteNote = (id) => {
		const update = notes.filter((el) => el._id !== id);
		setNote([ ...update ]);
		const newNotes = JSON.stringify(update);

		localStorage.setItem('notes', newNotes);
	};

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
							<button onClick={deleteNote.bind(null, el._id)}>Delete</button>
						</div>
					);
				})}
			</Fragment>
		)
	);
};

export default DisplayNotes;
