import React from "react";
import "./dist/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";


import About from "./pages/About";
import Services from "./pages/Services";
import Actuality from "./pages/Actuality";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


const App = () => {
 return (
   <Router>
   
     <Navbar/>
     <main className="main-content">
       <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/o-nas" element={<About />} />
         <Route path="/sluzby" element={<Services />} />
         <Route path="/aktuality" element={<Actuality />} />
         <Route path="/novinky" element={<News />} />
         <Route path="/kontakty" element={<Contact />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;