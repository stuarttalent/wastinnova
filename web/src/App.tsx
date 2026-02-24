import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { CompliancePage } from './pages/CompliancePage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicesPage } from './pages/ServicesPage'
import { TechnologyDemoPage } from './pages/TechnologyDemoPage'
import { TechnologyPage } from './pages/TechnologyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/technology/demo" element={<TechnologyDemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
