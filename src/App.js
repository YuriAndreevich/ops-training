import './App.css';
import T1l1 from './T1l1'
import T1l2 from './T1l2'
import T1l3 from './T1l3'
import T2l1 from './T2l1'
import T3l1 from './T3l1'
import T4l1 from './T4l1'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/training/1l1" element={<T1l1 />} />
        <Route path="/training/1l2" element={<T1l2 />} />
        <Route path="/training/1l3" element={<T1l3 />} />
        <Route path="/training/2l1" element={<T2l1 />} />
        <Route path="/training/3l1" element={<T3l1 />} />
        <Route path="/training/4l1" element={<T4l1 />} />
      </Routes >
    </div>
  );
}

export default App;
