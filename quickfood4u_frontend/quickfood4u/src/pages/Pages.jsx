import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation} from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Veggie from "../components/Veggie";
import { AnimatePresence } from "framer-motion";
import Popular from "../components/Popular";
import GroceryList from "../components/GroceryList";
//import Login from "../Authentication/Login";
//import Logout from "../Authentication/Logout";

function Pages() {
  const location = useLocation();
  return (
   <AnimatePresence mode="wait">
      <Routes  Location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route  path="/searched/:search" element={<Searched/>}/>
        <Route  path="/recipe/:name" element={<Recipe/>}/>
        <Route path="/veggie" element={<Veggie/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/grocerylist" element={<GroceryList/>}/>
        {/* <Route path="/login"  element={<Login/>}/>
        <Route path="/logout" element={<Logout/>} /> */}

      </Routes>
      </AnimatePresence>
    
  );
}

export default Pages;
 