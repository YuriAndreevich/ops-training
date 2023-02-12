import './App.css';
import T1l1 from './T1l1'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/training/1l1" element={<T1l1 />} />
        {/* <Route path="/training/1l2" element={<T1l2 />} />
          <Route path="/training/1l3" element={<T1l3 />} />
          <Route path="/training/2l1" element={<T2l1 />} />
          <Route path="/training/3l1" element={<T3l1 />} />
          <Route path="/training/4l1" element={<T4l1 />} /> */}
      </Routes >
    </div>
  );
}

export default App;
