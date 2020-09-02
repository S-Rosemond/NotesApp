import React from 'react';
import { Link } from 'react-router-dom';
import NotesList from '../../components/noteList/view/NotesList';
import FabBtn from '../../components/buttons/FabBtn';

const HomePage = () => {
  return (
    <div>
      <div>
        <NotesList />
      </div>

      <FabBtn to='create' component={Link} />
    </div>
  );
};

export default HomePage;
