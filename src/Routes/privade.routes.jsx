
import { BrowserRouter, Routes, Route } from "react-router-dom";

const PrivadeRoutes = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<>Home</>}/>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default PrivadeRoutes;