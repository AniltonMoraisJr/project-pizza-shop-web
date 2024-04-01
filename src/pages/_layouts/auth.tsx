import React from 'react'
import { Outlet } from 'react-router-dom'

// import { Container } from './styles';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export { AuthLayout }
