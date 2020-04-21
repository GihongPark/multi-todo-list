import React from 'react';
import './App.scss';

import BoardContainer from './containers/BoardContainer';

function App() {
  return (
    <div className='App'>
      <div className='header'></div>
      <div className='content'>
        <div className='menu'></div>
        <BoardContainer />
      </div>
    </div>
  );
}

export default App;
