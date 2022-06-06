import './App.css';
import ModelViewer from './view/modelViewer';
import './view/modelBox.css';

function App() {
  return (
    <div className="App">
      <div className='modelbox'>
        <ModelViewer scale="40" modelPath={"/tree.glb"} />
        <ModelViewer scale="2" modelPath={"/young2021.glb"} />
      </div>
    </div>
  );
}

export default App;
