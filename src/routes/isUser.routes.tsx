import { Route, Routes } from 'react-router-dom'
import { Teste } from '../pages/private/teste'
import { ErrorPage } from '../pages/error'


export const IsUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Teste />} />

        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
