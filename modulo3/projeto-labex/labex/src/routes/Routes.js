import React from "react";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import { Details } from "../Pages/details/Details";
import { Home } from "../Pages/home/Home";
import { LoginAdm } from "../Pages/login-adm/LoginAdm";
import { Trips } from "../Pages/trips/Trips";
import { PageAdm } from "../Pages/page-Adm/PageAdm";
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
                <Route path="details/:id" element={<Details/>}/>
                <Route path="pageAdm" element={<PageAdm/>}/>
                <Route path="creat" element={<CreatTrip/>}/>
                <Route path="sing" element={<SingUp/>}/>
            </Routes>
            </BrowserRouter>
            
       
    )
}