import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Donate from "./Donate.jsx";
import DonatedBooks from "./DonatedBooks.jsx";
import Header from "../Header/Header.jsx";

export default function Router() {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Donate' element={<Donate />} />
          <Route path='/DonatedBooks' element={<DonatedBooks />} />
        </Routes>
      </BrowserRouter>
        </>
    );
}