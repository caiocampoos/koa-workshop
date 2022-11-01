import React from 'react';
import deleteEventMutation from './mutations/deleteEvent';

const MainPage = ({ data }) => {
  return (

    // add crud HERE
    <button onClick={() => deleteEventMutation('')}>
      test
    </button>
  );
};

export default MainPage;