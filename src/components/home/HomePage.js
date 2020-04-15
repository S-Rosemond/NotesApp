import React, { Fragment, useState, useEffect } from 'react';
import Alert from '../util/Alert';
import DisplayNotes from '../view/DisplayNotes';

const HomePage = () => {
	const [ notes, setNote ] = useState([]);
	const [ entry, setEntry ] = useState({
		_id: '',
		title: '',
		body: '',
		dateCreated: '',
		lastUpdated: ''
	});
	const [ alert, setAlert ] = useState('');

	useEffect(() => {
		let savedNotes = localStorage.getItem('notes');
		savedNotes = JSON.parse(savedNotes);

		if (savedNotes) setNote(savedNotes);
	}, []);

	const submit = (e) => {
		e.preventDefault();

		if (notes.length > 0) {
			const newNotes = JSON.stringify(notes);

			localStorage.setItem('notes', newNotes);
		}
	};

	const createEntry = (e) => {
		setEntry({ ...entry, [e.target.name]: e.target.value });
	};

	const addNote = (entries) => {
		if (!entries.body) {
			setAlert('The note field cannot be blank');

			setTimeout(() => setAlert(''), 5000);
			return;
		}

		if (!entries.title) {
			const date = new Date(Date.now());

			entries.title = date.toDateString();
		}

		entries._id = entries.length;
		entries.lastUpdated = new Date().toLocaleDateString();
		entries.dateCreated = new Date(Date.now()).toString();

		setNote([ ...notes, entries ]);

		console.log(notes);
	};

	const updateNote = (params) => {};

	return (
		<Fragment>
			{/* {notes && <DisplayNotes />} */}
			{alert && <Alert message={alert} />}
			<form onSubmit={submit}>
				<label>
					Title:
					<input type="text" name="title" onChange={createEntry} />
				</label>
				<label>
					Note:
					<textarea name="body" onChange={createEntry} />
				</label>
				<button>Edit Note</button>
				<button onClick={addNote.bind(null, entry)}> Add Note </button>
			</form>
		</Fragment>
	);
};

export default HomePage;
