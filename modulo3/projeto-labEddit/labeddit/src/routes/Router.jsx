import { BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage/Login"
import {SignUpPage} from "../pages/SignUpPage/SignUp"
import {PostPage} from '../pages/PostPage/Post'
import {FeedPage} from "../pages/FeedPage/Feed"
import { Header } from "../components/Header/Header";


export const Router = () => {
    
    return(
        <BrowserRouter>

        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="signUpPage"  element={<SignUpPage/>}/> 
            <Route path="postPage" element={<PostPage/>}/>
            <Route path="feedPage" element={<FeedPage/>}/> 
        </Routes>
        </BrowserRouter>
    )
}