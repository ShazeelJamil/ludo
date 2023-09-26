import bgCSS from './css/bgCSS.css';
import Board from './components/board';
import Display from './components/Display.js'
// import React, { createContext, } from 'react';

// const MyContext = createContext();

function App() {

  return (
    <div>
      <div className='bg' style={bgCSS}>
        {/* <MyContext.Provider showWinnerNo={{showWinnerNo}}> */}
          <Board />
          <Display />
        {/* </MyContext.Provider> */}
      </div>



    </div>
  );
}

export default App;
