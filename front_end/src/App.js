import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./component/Login/Login";
import {DataMovie} from "./component/DataMovie/DataMovie"
import {Sign} from './component/SignUp/Sign';
import Header from './component/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/dataAdmin" element={<DataMovie/>}></Route>
          <Route path="/Sign" element={<Sign/>}></Route>
          <Route path="/header" element={<Header/>}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
