import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='/contacts' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
