import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./Components/Login/Login";
import {Form} from "./Components/Form/Form"
import {Sign} from './Components/SignUp/Sign';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/dataAdmin" element={<Form/>}></Route>
          <Route path="/Sign" element={<Sign/>}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
