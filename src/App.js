import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Form from "./components/form/Form";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/form"} element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
