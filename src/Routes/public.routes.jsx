import Login from "../pages/login";
import Welcome from "../pages/Welcome";
import Signin from "../pages/Signin";

import { BrowserRouter,Routes, Route } from "react-router-dom";


const PublicRoutes = () => {
    return ( 

        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signin" element={<Signin />} /> 

        </Routes>
        </BrowserRouter>

     );
}
 
export default PublicRoutes;