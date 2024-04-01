import React from 'react'
import { Outlet } from 'react-router-dom'

// import { Container } from './styles';

const AppLayout: React.FC = () => {
  return (
    <div>
      <h1>Cabeçalho</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export { AppLayout }
