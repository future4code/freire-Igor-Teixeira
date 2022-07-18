import React from "react";
import { BrowserRouter , Routes,Route } from "react-router-dom";
import { Details } from "../Pages/details/Details";
import { Home } from "../Pages/home/Home";
import { LoginAdm } from "../Pages/login-adm/LoginAdm";
import { Trips } from "../Pages/trips/Trips";
import { PageAdm } from "../Pages/page-Adm/PageAdm";
import { CreatTrip } from "../Pages/creat-trips/CreatTrips";
import { SignUp } from "../Pages/sign-up/SignUp";
import { Header } from "../Components/header/Header";
import { Footer } from "../Components/footer/Footer";
import { WhoWeAre } from "../Pages/whoWeare/WhoWeAre";


export const Router = () => {
    return (
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="trips" element={<Trips/>}/>
                <Route path="login" element={<LoginAdm/>}/>
                <Route path="details/:id" element={<Details/>}/>
                <Route path="login/pageAdm" element={<PageAdm/>}/>
                <Route path="login/pageAdm/create" element={<CreatTrip/>}/>
                <Route path="trips/sing" element={<SignUp/>}/>
                <Route path="whoweare" element={<WhoWeAre/>}/> 
            </Routes>
            <Footer/>
            </BrowserRouter>
            
       
    )
}


