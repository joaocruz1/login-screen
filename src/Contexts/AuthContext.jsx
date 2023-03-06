import React, {createContext, useState, useEffect} from 'react'

//Função que constroe o Provider e também permite Consumir os Dados Globais
export const AuthContext = createContext()

//Componente Provider para passar os valores para os Childrens
function AuthProvider ({children}) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({email:'', password:''})
  
  



  return (
    <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
