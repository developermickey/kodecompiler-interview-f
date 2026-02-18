import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import './App.css'
import './index.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        
        <Routes>
          {/* Dashboard & Profile - no navbar/footer */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* All other pages with navbar and footer */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/contact' element={<ContactUs />}/>
                    <Route path='/register' element={<Register />}/>
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;