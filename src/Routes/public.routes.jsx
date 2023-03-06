import Login from "../pages/login";
import Welcome from "../pages/Welcome";

import { BrowserRouter,Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
    return ( 

        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} /> 
        </Routes>
        </BrowserRouter>

     );
}
 
export default PublicRoutes;