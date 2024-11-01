import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, Navbar } from './'


export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />


      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='login' element={ <LoginPage /> } />
        <Route path='about' element={ <AboutPage /> } />

        {/* <Route path='/*' element={ <h1>404 Not Found</h1> } /> */}
        {/* <Route path='/*' element={ <LoginPage /> } /> */}
        <Route path='/*' element={ <Navigate to="/about" /> } />

      </Routes>
    </>
  )
}
