import React from 'react';
import { Link } from 'react-router-dom';
import NotesList from '../../components/noteList/view/NotesList';
import CPenBtn from '../../components/buttons/CustomPenBtn.jsx';
import FabBtn from '../../components/buttons/FabBtn';

const HomePage = () => {
  return (
    <div>
      {/* List notes from form context component here,
        pen btn may need to be absolute check mobile first
       */}
      <div>
        <NotesList />
      </div>

      <FabBtn to='create' component={Link} />
    </div>
  );
};

export default HomePage;
