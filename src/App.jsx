import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ThemeProvider'
import CataloguesPage from './pages/CataloguesPage'

function App() {

  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/catalogues' element={<CataloguesPage />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='/contacts' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
