import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import FormResults from "./components/form-result/FormResults";


function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/form"} element={<Form/>}></Route>
        <Route path={"/form-results"} element={<FormResults/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
