import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { ApplyModal } from './components/ApplyModal';
import { DemoClassModal } from './components/DemoClassModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { FacultyPage } from './pages/FacultyPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Digital Marketing");

  const handleOpenApply = (courseName = "Digital Marketing") => {
    setSelectedCourse(typeof courseName === 'string' ? courseName : "Digital Marketing");
    setIsApplyModalOpen(true);
  };

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleDownloadSyllabus = () => {
    // Generate/Download PDF prompt trigger
    const link = document.createElement('a');
    link.href = '/images/PIDL LOGO - Black (1).jpg';
    link.setAttribute('download', 'PIDL_Digital_Marketing_Syllabus_2026.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('PIDL Digital Marketing 10-Module Syllabus PDF download initiated!');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#18181B]">
        
        {/* Sticky Header */}
        <Header
          onOpenApply={() => handleOpenApply("Digital Marketing")}
          onOpenDemo={handleOpenDemo}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenApply={handleOpenApply}
                  onOpenDemo={handleOpenDemo}
                  onDownloadSyllabus={handleDownloadSyllabus}
                />
              }
            />
            <Route path="/about" element={<AboutPage onOpenApply={handleOpenApply} />} />
            <Route
              path="/curriculum"
              element={
                <CurriculumPage
                  onOpenApply={handleOpenApply}
                  onDownloadSyllabus={handleDownloadSyllabus}
                />
              }
            />
            <Route path="/faculty" element={<FacultyPage onOpenApply={handleOpenApply} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenApply={handleOpenApply} />} />
            <Route
              path="/admissions"
              element={
                <AdmissionsPage
                  onOpenApply={handleOpenApply}
                  onOpenDemo={handleOpenDemo}
                  onDownloadSyllabus={handleDownloadSyllabus}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions */}
        <WhatsAppFab />
        <MobileStickyCTA onOpenApply={() => handleOpenApply("Digital Marketing")} />

        {/* Global Application Form Modal */}
        <ApplyModal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          selectedCourse={selectedCourse}
        />

        {/* Global Demo Class Modal */}
        <DemoClassModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />

      </div>
    </Router>
  );
}

export default App;
