import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './components/ThemeProvider'
import CataloguesPage from './pages/CataloguesPage'
import CataloguePage from './pages/CataloguePage'
import ProductPage from './pages/ProductPage'

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
            <Route path='/catalogue' element={<CataloguePage />} />
            <Route path='/product' element={<ProductPage />} />
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
