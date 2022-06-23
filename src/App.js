import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {} from 'react-router'
import Alert from './pages/Alert'
import Index from './pages/Index'
import Badge from './pages/Badge'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Index />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/badge' element={<Badge />} />
      </Routes>
    </Router>
  )
}

export default App
