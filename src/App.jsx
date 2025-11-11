import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path='/company' element={<CompanyPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
