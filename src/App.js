import "./App.css";
import T1l1 from "./data/1/T1l1";
import T1l2 from "./data/1/T1l2";
import T1l3 from "./data/1/T1l3";
import T1l4 from "./data/1/T1l4";
import T2l1 from "./data/2/T2l1";
import T2l2 from "./data/2/T2l2";
import T2l3 from "./data/2/T2l3";
import T2l4 from "./data/2/T2l4";
import T3l1 from "./data/3/T3l1";
import T3l2 from "./data/3/T3l2";
import T3l3 from "./data/3/T3l3";
import T3l4 from "./data/3/T3l4";
import T4l1 from "./data/4/T4l1";
import T4l2 from "./data/4/T4l2";
import T4l3 from "./data/4/T4l3";
import T4l4 from "./data/4/T4l4";
import T5l1 from "./data/5/T5l1";
import T5l2 from "./data/5/T5l2";
import { Route, Routes } from "react-router-dom";

function App() {
  const pathLocation =
    window.location == "http://localhost:3000" ||
    "https://ops-training.sava.site/";

  function path(pathLocation) {
    if (pathLocation) {
      return <T1l1 />;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<T1l1 />} />
        <Route path="1l1" element={<T1l1 />} />
        <Route path="1l2" element={<T1l2 />} />
        <Route path="1l3" element={<T1l3 />} />
        <Route path="1l4" element={<T1l4 />} />
        <Route path="2l1" element={<T2l1 />} />
        <Route path="2l2" element={<T2l2 />} />
        <Route path="2l3" element={<T2l3 />} />
        <Route path="2l4" element={<T2l4 />} />
        <Route path="3l1" element={<T3l1 />} />
        <Route path="3l2" element={<T3l2 />} />
        <Route path="3l3" element={<T3l3 />} />
        <Route path="3l4" element={<T3l4 />} />
        <Route path="4l1" element={<T4l1 />} />
        <Route path="4l2" element={<T4l2 />} />
        <Route path="4l3" element={<T4l3 />} />
        <Route path="4l4" element={<T4l4 />} />
        <Route path="5l1" element={<T5l1 />} />
        <Route path="5l2" element={<T5l2 />} />
      </Routes>
    </div>
  );
}

export default App;
