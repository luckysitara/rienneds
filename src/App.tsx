/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import ServiceDetail from "./pages/ServiceDetail";
import CourseDetail from "./pages/CourseDetail";

import Projects from "./pages/Projects";
import NyscAcademy from "./pages/NyscAcademy";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LegacyCourseRedirect() {
  const { id } = useParams();
  return <Navigate to={`/academy/${id}`} replace />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/academy" element={<Courses />} />
              <Route path="/academy/:id" element={<CourseDetail />} />
              <Route path="/courses" element={<Navigate to="/academy" replace />} />
              <Route path="/courses/:id" element={<LegacyCourseRedirect />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/nysc" element={<NyscAcademy />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

