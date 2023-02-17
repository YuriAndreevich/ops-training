import './App.css';
import T1l1 from './T1l1'
import T1l2 from './T1l2'
import T1l3 from './T1l3'
import T2l1 from './T2l1'
import T2l2 from './T2l2'
import T2l3 from './T2l3'
import T3l1 from './T3l1'
import T4l1 from './T4l1'
import { Route, Routes } from 'react-router-dom';

function App() {
  const pathLocation = window.location == 'http://localhost:3000/ops-training/' || 'https://yuriandreevich.github.io/ops-training/'

  function path(pathLocation) {
    if (pathLocation) {
      return <T1l1 />
    }
  }

  return (
    <div className="App">
      {path()}

      <Routes>
        <Route path="/ops-training/" element={<T1l1 />} />
        <Route path="/ops-training/1l1" element={<T1l1 />} />
        <Route path="/ops-training/1l2" element={<T1l2 />} />
        <Route path="/ops-training/1l3" element={<T1l3 />} />
        <Route path="/ops-training/2l1" element={<T2l1 />} />
        <Route path="/ops-training/2l2" element={<T2l2 />} />
        <Route path="/ops-training/2l3" element={<T2l3 />} />
        <Route path="/ops-training/3l1" element={<T3l1 />} />
        <Route path="/ops-training/4l1" element={<T4l1 />} />
      </Routes >
    </div>
  );
}

export default App;
