import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from '../pages'
import { ErrorPage } from '../pages/error'

export const NotUser = () => {
  return (
    <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}
