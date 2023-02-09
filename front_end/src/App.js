import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DataMovie} from "./components/DataMovie/DataMovie"
import {Sign} from './components/SignUp/Sign';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/dataAdmin" element={<DataMovie/>}></Route>
          <Route path="/Sign" element={<Sign/>}></Route>
          <Route path="/" element={<Header/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
