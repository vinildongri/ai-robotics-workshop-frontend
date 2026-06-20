import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans">
        <Header />
        <Hero />
        {/* <WorkshopDetails > */}
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQSection />
        <RegistrationForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;