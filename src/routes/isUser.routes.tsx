import { Route, Routes } from 'react-router-dom'
import { Perfil } from '../pages/private/perfil'
import { ErrorPage } from '../pages/error'
import { Home } from '../pages/private/home'


export const IsUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />

        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
