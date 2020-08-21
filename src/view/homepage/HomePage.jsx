import React from 'react';
import PenBtn from './../../components/buttons/PenBtn';
import NotesListHomeView from '../../components/noteslist/NotesListHomeView';

const HomePage = () => {
  return (
    <div>
      {/* List notes from form context component here,
        pen btn may need to be absolute check mobile first
       */}
      <NotesListHomeView />
      <PenBtn href='/create' />
    </div>
  );
};

export default HomePage;
