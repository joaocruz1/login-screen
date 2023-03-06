import React, {useContext} from 'react'
import PrivadeRoutes from './src/Routes/privade.routes'
import PublicRoutes from './src/Routes/public.routes'
import { AuthContext } from './src/Contexts/AuthContext'

function App() {
  const  {auth}  = useContext(AuthContext)
  return auth ? <PrivadeRoutes /> : <PublicRoutes />
}

export default App;