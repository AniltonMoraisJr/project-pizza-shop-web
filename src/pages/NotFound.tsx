import React from 'react'
import { Link } from 'react-router-dom'

// import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <div className="text-4xl font-bold">Página não encontrada</div>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to={'/'} className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}

export default NotFound
