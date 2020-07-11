import React from 'react';
import PenBtn from './../../components/buttons/PenBtn';
import NotesListView from '../../components/noteslist/NotesListView';

const HomePage = () => {
  return (
    <div>
      {/* List notes from form context component here,
        pen btn may need to be absolute check mobile first
       */}
      <NotesListView />
      <PenBtn href='/create' />
    </div>
  );
};

export default HomePage;
