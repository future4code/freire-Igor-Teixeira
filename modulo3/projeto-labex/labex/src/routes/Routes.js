import React from "react";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import { Details } from "../Pages/details/Details";
import { Home } from "../Pages/home/Home";
import { LoginAdm } from "../Pages/login-adm/LoginAdm";
import { Trips } from "../Pages/trips/Trips";
import { Candidate } from "../Pages/candidate/Candidate";
import { CreatTrip } from "../Pages/creat-trips/CreatTrips";
import { SingUp } from "../Pages/sing-up/SingUp";
import { Header } from "../Components/header/Header";

export const Router = () => {
    return (
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="trips" element={<Trips/>}/>
                <Route path="login" element={<LoginAdm/>}/>
                <Route path="details" element={<Details/>}/>
                <Route path="candidate" element={<Candidate/>}/>
                <Route path="creat" element={<CreatTrip/>}/>
                <Route path="sing" element={<SingUp/>}/>
            </Routes>
            </BrowserRouter>
            
       
    )
}