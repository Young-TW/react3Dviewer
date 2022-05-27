import './App.css';
import ModelViewer from './view/modelViewer';
import './view/modelBox.css';

function App() {
  return (
    <div className="App">
      <div className='modelbox'>
        <ModelViewer scale="5" modelPath={"/tree.glb"} />
      </div>
    </div>
  );
}

export default App;
