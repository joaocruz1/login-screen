import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import AuthProvider from './Contexts/AuthContext'
import Global from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Global />
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
)