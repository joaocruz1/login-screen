import React, {createContext, useState, useEffect} from 'react'

//Função que constroe o Provider e também permite Consumir os Dados Globais
export const AuthContext = createContext()

//Componente Provider para passar os valores para os Childrens
function AuthProvider ({children}) {
  const [auth, setAuth] = useState(false)
  const [token, setToken] = useState()

  const [users, setUsers] = useState([
    
     {
      email:'joaovcruz50@gmail.com',
      password:'1234567'}])
  
 


  
     
  return (
    <AuthContext.Provider value={{auth, setAuth, users, setUsers,token}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
