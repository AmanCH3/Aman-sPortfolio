import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import AllProjects from './components/AllProjects';
import UIUXGallery from './components/UIUXGallery';
import { projects } from './components/Work';
import NazarBattu from './components/NazarBattu';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ─── Home page ─────────────────────────────────────────── */
function Home() {
  const navigate = useNavigate();

  const handleSelectProject = (project) => {
    if (project.category === 'uiux') {
      navigate('/uiux');
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)] font-body relative">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="work">
          <Work
            onSelectProject={handleSelectProject}
            onViewAll={() => navigate('/all-projects')}
          />
        </div>
        <div id="process"><Process /></div>
        <div id="experience"><Experience /></div>
        <div id="certificates"><Certificates /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

/* ─── Project details page ──────────────────────────────── */
function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    navigate('/');
    return null;
  }

  return (
    <ProjectDetails
      project={project}
      onBack={() => navigate(-1)}
    />
  );
}

/* ─── All projects page ─────────────────────────────────── */
function AllProjectsPage() {
  const navigate = useNavigate();

  const handleSelectProject = (project) => {
    if (project.category === 'uiux') {
      navigate('/uiux');
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <AllProjects
      onBack={() => navigate(-1)}
      onSelectProject={handleSelectProject}
    />
  );
}

/* ─── Root app ──────────────────────────────────────────── */
function App() {
  return (
    <>
      <NazarBattu />
      <HashRouter>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
        <Route path="/uiux" element={<UIUXGallery onBack={() => window.history.back()} />} />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
