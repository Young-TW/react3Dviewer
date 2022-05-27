import logo from './logo.svg';
import './App.css';
import ModelViewer from './view/modelViewer';

function App() {
  return (
    <div className="App">
      <ModelViewer scale="40" modelPath={"/tree.glb"} />
    </div>
  );
}

export default App;
