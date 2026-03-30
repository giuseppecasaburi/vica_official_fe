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
import AccessoryPage from './pages/AccessoryPage'
import AccessoriesPage from './pages/AccessoriesPage'

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
            <Route path='/catalogue/:id' element={<CataloguePage />} />
            <Route path='/accessories/' element={<AccessoriesPage />} />
            <Route path='/accessories/:id' element={<AccessoriesPage />} />
            <Route path='/accessory/:id' element={<AccessoryPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
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
