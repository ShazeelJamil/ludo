import bgCSS from './css/bgCSS.css';
import Board from './components/board';
import Display from './components/Display.js'

function App() {
  return (
    <div>
      <div className='bg' style={bgCSS}>
        <Board />
        <Display/>
      </div>



    </div>
  );
}

export default App;
