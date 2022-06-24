import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {} from 'react-router'
import Alert from './pages/Alert'
import Index from './pages/Index'
import Badge from './pages/Badge'
import Breadcrumb from './components/Breadcrumb'
import Button from './pages/Button'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Index />} />
        <Route path='/components/alert' element={<Alert />} />
        <Route path='/components/badge' element={<Badge />} />
        <Route path='/components/breadcrumb' element={<Breadcrumb />} />
        <Route path='/components/button' element={<Button />} />
      </Routes>
    </Router>
  )
}

export default App
