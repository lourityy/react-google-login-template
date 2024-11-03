import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'
// lourity
function App() {
  const client_id = 'your_client_id';
  return (
    <GoogleOAuthProvider clientId={client_id}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
