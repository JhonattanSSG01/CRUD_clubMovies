import './App.css';
import {Routes, Route} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Form} from "./components/Form/Form"
import {Sign} from './components/SignUp/Sign';
import Header from './components/Header/Header';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/dataAdmin" element={<Form/>}></Route>
          <Route path="/Sign" element={<Sign/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/header' element={<Header/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
