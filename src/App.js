import React from "react";
import './App.css';
import {HomeWraper} from "./Components/HomeWraper/HomeWraper";
import {Home} from "./Components/Home/Home";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {SelectedItem} from "./Components/SelectedItem/SelectedItem";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeWraper />}>
                    <Route path="/" element={<Home />} />
                    <Route path=":type" element={<SelectedItem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

