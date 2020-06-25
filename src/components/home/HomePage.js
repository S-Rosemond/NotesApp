import React from 'react';
import TitleInput from '../inputs/TitleInput';
import NoteArea from '../textarea/NoteArea';
import { Button } from 'rebass';

const HomePage = () => {
  return (
    <form>
      <TitleInput />
      <NoteArea />
    </form>
  );
};

export default HomePage;
