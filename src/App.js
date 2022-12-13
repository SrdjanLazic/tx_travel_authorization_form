import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import FormResults from "./components/form-result/FormResults";
import FormAfter from "./components/form-after/FormAfter";
import Abroad from "./components/abroad/Abroad";


function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/form"} element={<Form/>}></Route>
        <Route path={"/form-results"} element={<FormResults/>}></Route>
        <Route path={"/form-after"} element={<FormAfter/>}></Route>
        <Route path={"/form-abroad"} element={<Abroad/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
