import React, { Fragment, useState, useEffect } from 'react';
import Alert from '../util/Alert';
import DisplayNotes from '../view/DisplayNotes';

const HomePage = () => {
	const [ notes, setNote ] = useState([]);
	const [ entry, setEntry ] = useState({
		title: '',
		body: '',
		dateCreated: new Date(Date.now()).toString()
	});
	const [ alert, setAlert ] = useState('');

	useEffect(() => {
		let savedNotes = localStorage.getItem('notes');
		savedNotes = JSON.parse(savedNotes);

		if (savedNotes) setNote(savedNotes);
	}, []);

	const submit = (e) => {
		e.preventDefault();

		const newNotes = JSON.stringify(notes);

		localStorage.setItem('notes', newNotes);
	};

	const createEntry = (e) => {
		setEntry({ ...entry, [e.target.name]: e.target.value });
	};

	const addNote = (entries) => {
		if (!entries.title) {
			const date = new Date(Date.now());

			entries.title = date.toLocaleDateString();
		}

		if (!entries.body) {
			setAlert('This field cannot be blank');
			return;
		}
		setNote(...notes, entries);
	};

	return (
		<Fragment>
			{notes && <DisplayNotes />}
			{alert && <Alert message={alert} />}
			<form onSubmit={submit}>
				<label>
					Title:
					<input type="text" name="title" onChange={createEntry} />
				</label>
				<label>
					Note:
					<textarea on={createEntry} />
				</label>
				<button onClick={addNote.bind(null, entry)}> Add Note </button>
			</form>
		</Fragment>
	);
};

export default HomePage;
