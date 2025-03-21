// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import NewChat from './pages/NewChat';
import YourMaterials from './pages/YourMaterials';
import YourStudent from './pages/YourStudent';
import Settings from './pages/Settings';
import Forgotpassword from './pages/Forgotpassword';
import Navbar from './pages/Navbar';
import Footer from './pages/footer';


const Layout: React.FC = () => {
  return (
    <div className="max-h-screen flex flex-col">
      
      {/* <header className="p-4 bg-gray-100 shadow">
        <nav className="flex justify-center space-x-6">
          <Link to="/newchat" className="text-gray-700 hover:text-black">
            New Chat
          </Link>
          <Link to="/yourmaterials" className="text-gray-700 hover:text-black">
            Your Materials
          </Link>
          <Link to="/yourstudent" className="text-gray-700 hover:text-black">
            Your Student
          </Link>
          <Link to="/settings" className="text-gray-700 hover:text-black">
            Settings
          </Link>
        </nav>
      </header> */}

      {/* Main content is rendered here */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="footer" element={<Footer />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="newchat" element={<NewChat />} />
          <Route path="yourmaterials" element={<YourMaterials />} />
          <Route path="yourstudent" element={<YourStudent />} />
          <Route path="settings" element={<Settings />} />
          <Route path="forgot" element={<Forgotpassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
