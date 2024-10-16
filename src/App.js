import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm '; 
import SignUp from './components/CreateAccountForm '; 
import ChangePassword from './components/Change password'; // Import the password change page
import LandingPage from './components/Landing page'; // Import the LandingPage component
import Profile from './components/profile and logout'; // Import the profile component
import InteriorCladding from './components/InteriorCladding'; // Import the InteriorCladding component
import SectionDetails from './components/SectionDetails'; // Import the SectionDetails component
import VerificationPage from './components/VerificationPage'; // Import the VerificationPage component





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/change-password" element={<ChangePassword />} /> {/* Password change path */}
        <Route path="/landingpage" element={<LandingPage />} /> {/* Add a path to the LandingPage */}
        <Route path="/VerificationPage" element={<VerificationPage />} />

        <Route path="/profile" element={<Profile />} /> {/* Add path to profile page */}
        <Route path="/interior-cladding" element={<InteriorCladding />} /> {/* Add path to InteriorCladding page */}
       

        <Route path="/details/:title" element={<SectionDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
