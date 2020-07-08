import React from 'react';
import { Link } from 'react-router-dom';
import PenBtn from './../../components/buttons/PenBtn';

const HomePage = () => {
  return (
    <div>
      {/* List notes from form context component here,
        pen btn may need to be absolute check mobile first
       */}

      {/* link with component not working atm (todo) */}
      <Link to='/create' component={PenBtn}></Link>

      <Link to='/create'>
        <PenBtn />
      </Link>
    </div>
  );
};

export default HomePage;
