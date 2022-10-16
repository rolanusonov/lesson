 import './App.scss';

import Home from "./components/home/Home";
 import {Route, Routes} from "react-router-dom";

 import Rolan from "./components/mentor/Rolan";
 import Bekbol from "./components/mentor/Bekbol";
 import Baktier from "./components/mentor/Baktier";
 import Taalai from "./components/mentor/Taalai";
 import Medil from "./components/mentor/Medil";
 import Dastan from "./components/mentor/Dastan";
 import Lesson from "./components/Lesson";
 import All from "./components/mentor/All";


function App() {
    return (
<div>

    <Routes>
        <Route path={"/"} element={ <Home/>}/>
        <Route path={"/lesson"} element={ <Lesson/>}/>
        <Route path={"/rolan"} element={<Rolan/>}/>
        <Route path={"/bekbol"} element={<Bekbol/>}/>
        <Route path={"/baktier"} element={<Baktier/>}/>
        <Route path={"/taalai"} element={<Taalai/>}/>
        <Route path={"/medil"} element={<Medil/>}/>
        <Route path={"/dastan"} element={<Dastan/>}/>
        <Route path={"/all"} element={<All/>}/>

     </Routes>
 </div>



    );
}

export default App;
