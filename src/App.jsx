import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaBrain,
  FaBars,
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaMoon,
  FaSun,
  FaTimes,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiExpress,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'
import { MdMailOutline } from 'react-icons/md'
import profilePhoto from './assets/foto.JPG'
import heroPaperPhoto from './assets/fotopaper.png'
import aboutPaperPhoto from './assets/fotopaper3.png'
/* ── Kampung Digital images ── */
import kdLanding from './assets/projectkampungdigital/landingpage.png'
import kdLogin from './assets/projectkampungdigital/login.png'
import kdDashboardAdmin from './assets/projectkampungdigital/dashboardadmin.png'
import kdDashboardKades from './assets/projectkampungdigital/dashoardkades.png'
import kdDashboardRT from './assets/projectkampungdigital/dashboardrt.png'
import kdDashboardRW from './assets/projectkampungdigital/dashboardrw.png'
import kdDashboardMasyarakat from './assets/projectkampungdigital/dashboardmasyarakat.png'
import kdDataPenduduk from './assets/projectkampungdigital/datapenduduk.png'
import kdDataKK from './assets/projectkampungdigital/datakartukeluarga.png'
import kdDataKas from './assets/projectkampungdigital/datakas.png'
import kdMockupLanding from './assets/projectkampungdigital/mockuplanding.png'
import kdMockupDashboard from './assets/projectkampungdigital/mockupdashboard.png'
import kdMockupBerita from './assets/projectkampungdigital/mockupberita.png'
/* ── FinSight (UMKM) images ── */
import fsLanding from './assets/projectumkm/landingpage.png'
import fsLogin from './assets/projectumkm/login.png'
import fsRegister from './assets/projectumkm/register.png'
import fsDashboard from './assets/projectumkm/dashboard.png'
import fsDaftarBisnis from './assets/projectumkm/daftarbisnis.png'
import fsDaftarPengeluaran from './assets/projectumkm/daftarpengeluaran.png'
import fsDataPendapatan from './assets/projectumkm/datapendapatan.png'
import fsMockupLanding from './assets/projectumkm/mockuplaptoplanding.png'
import fsMockupLandingMac from './assets/projectumkm/mockuplandingmackbook.png'
import fsMockupDashboard from './assets/projectumkm/dahboardmacbookmockup.png'
/* ── StressGuard (Capstone) images ── */
import sgMacbook15 from './assets/projectStressGUard/MacBook Air (15 inch).png'
import sgMacbook2022 from './assets/projectStressGUard/MacBook Air (2022).png'
import sgIphone17Mockup from './assets/projectStressGUard/Mockuuups Copy of Free Transparent iPhone 17 Mockup.png'
import sgDashboard from './assets/projectStressGUard/dashboard.png'
import sgDashboardAnalisis from './assets/projectStressGUard/dashboardsesudah-ada-analis.png'
import sgIphone16Mockup from './assets/projectStressGUard/iPhone 16 Pro.jpg'
import sgLanding from './assets/projectStressGUard/landing-page.png'
import sgLogin from './assets/projectStressGUard/login.png'
import sgScreenCapture from './assets/projectStressGUard/screencapture-renewed-mercy-production-9f6c-up-railway-app-2026-06-05-03_00_52.png'
import { MotionCard, Section } from './components/Section'
import {
  certifications,
  education,
  experiences,
  navItems,
  profile,
  projects,
  skills,
} from './data/portfolio'

const floatingSkills = [
  { label: 'GitHub', icon: FaGithub, className: 'skill-float-github' },
  { label: 'TensorFlow', icon: SiTensorflow, className: 'skill-float-tensorflow' },
  { label: 'PyTorch', icon: SiPytorch, className: 'skill-float-pytorch' },
  { label: 'NumPy', icon: SiNumpy, className: 'skill-float-numpy' },
  { label: 'Pandas', icon: SiPandas, className: 'skill-float-pandas' },
  { label: 'Scikit-learn', icon: SiScikitlearn, className: 'skill-float-scikit' },
  { label: 'Laravel', icon: SiLaravel, className: 'skill-float-laravel' },
  { label: 'PHP', icon: SiPhp, className: 'skill-float-php' },
  { label: 'MySQL', icon: SiMysql, className: 'skill-float-mysql' },
]

const aboutSkillIcons = [
  { label: 'Artificial Intelligence', icon: FaBrain, color: '#2563eb' },
  { label: 'Web Development', icon: FaCode, color: '#14b8a6' },
  { label: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { label: 'React', icon: SiReact, color: '#61dafb' },
  { label: 'Express.js', icon: SiExpress, color: '#64748b' },
  { label: 'Laravel', icon: SiLaravel, color: '#ff2d20' },
  { label: 'PHP', icon: SiPhp, color: '#777bb4' },
  { label: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { label: 'Python', icon: SiPython, color: '#3776ab' },
  { label: 'TensorFlow', icon: SiTensorflow, color: '#ff8f00' },
  { label: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
  { label: 'Scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
  { label: 'Pandas', icon: SiPandas, color: '#150458' },
  { label: 'NumPy', icon: SiNumpy, color: '#4dabcf' },
  { label: 'OpenCV', icon: SiOpencv, color: '#5c3ee8' },
]

function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="logo-mark">
          {profile.initials}.
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle mobile-theme-toggle"
            type="button"
            onClick={() => {
              onToggleTheme()
              closeMenu()
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <a className="mobile-hire-link" href="#contact" onClick={closeMenu}>
            Hire Me
          </a>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <a className="button button-small hidden sm:inline-flex" href="#contact">
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ '--hero-paper-image': `url(${heroPaperPhoto})` }}
    >
      <div className="floating-skills" aria-hidden="true">
        {floatingSkills.map((skill) => {
          const Icon = skill.icon
          return (
            <span key={skill.label} className={`floating-skill ${skill.className}`}>
              <Icon />
            </span>
          )
        })}
      </div>
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="eyebrow">Hello, I'm <span aria-hidden="true">✨</span></p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button" href={profile.cvUrl} download>
              <FaDownload aria-hidden="true" />
              Download CV
            </a>
            <a className="button button-secondary" href="#contact">
              <MdMailOutline aria-hidden="true" />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="profile-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
        >
          <img
            className="profile-photo"
            src={profilePhoto}
            width="1004"
            height="1496"
            alt={`${profile.name} profile photo`}
            loading="eager"
          />
          <div className="profile-card-body">
            <p className="profile-card-name">{profile.name}</p>
            <p>{profile.title}</p>
            <div className="profile-meta">
              <span>AI</span>
              <span>Laravel</span>
              <span>Machine Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  const marqueeIcons = [...aboutSkillIcons, ...aboutSkillIcons, ...aboutSkillIcons]

  return (
    <Section id="about" eyebrow="About Me ✨" title="Software engineering, web development, and AI">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="about-content">
          <figure className="about-photo-frame">
            <img
              src={aboutPaperPhoto}
              width="1600"
              height="1600"
              alt={`${profile.name} portrait illustration`}
              loading="lazy"
            />
          </figure>
          <div className="about-copy">
            <p>
              I am a Software Engineering student and Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. My primary tech stack includes Laravel, React, Express.js, PHP, MySQL, PostgreSQL, and RESTful APIs. Beyond web development, I am actively exploring Artificial Intelligence, Machine Learning, and Deep Learning using Python and industry-standard tools such as NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, OpenCV, Matplotlib, Jupyter Notebook, Google Colab, and Hugging Face. I am committed to continuous learning and always eager to take on new challenges that help me grow as a developer.
            </p>
            
          </div>
        </div>
        <div className="about-icon-marquee" aria-label="AI, web, and data technology stack">
          <div className="about-icon-track">
            {[0, 1].map((groupIndex) => (
              <div className="about-icon-group" key={groupIndex} aria-hidden={groupIndex === 1}>
                {marqueeIcons.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <span
                      key={`${item.label}-${groupIndex}-${index}`}
                      className="about-icon-item"
                      style={{ '--icon-color': item.color }}
                      aria-label={groupIndex === 0 ? item.label : undefined}
                      role={groupIndex === 0 ? 'img' : undefined}
                      title={item.label}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills ⚡" title="Tools I use to ship quality interfaces">
      <div className="card-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <MotionCard key={skill.name} className="skill-card" delay={index * 0.03}>
              <Icon className="card-icon" aria-hidden="true" />
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
            </MotionCard>
          )
        })}
      </div>
    </Section>
  )
}

const projectImages = {
  kampungdigital: [
    { src: kdMockupLanding, alt: 'Landing page mockup' },
    { src: kdMockupDashboard, alt: 'Dashboard mockup' },
    { src: kdMockupBerita, alt: 'Berita mockup' },
    { src: kdLanding, alt: 'Landing page' },
    { src: kdLogin, alt: 'Login page' },
    { src: kdDashboardAdmin, alt: 'Dashboard Admin' },
    { src: kdDashboardKades, alt: 'Dashboard Kepala Desa' },
    { src: kdDashboardRT, alt: 'Dashboard RT' },
    { src: kdDashboardRW, alt: 'Dashboard RW' },
    { src: kdDashboardMasyarakat, alt: 'Dashboard Masyarakat' },
    { src: kdDataPenduduk, alt: 'Data Penduduk' },
    { src: kdDataKK, alt: 'Data Kartu Keluarga' },
    { src: kdDataKas, alt: 'Data Kas' },
  ],
  finsight: [
    { src: fsMockupLanding, alt: 'Landing page mockup' },
    { src: fsMockupLandingMac, alt: 'Landing page MacBook mockup' },
    { src: fsMockupDashboard, alt: 'Dashboard MacBook mockup' },
    { src: fsLanding, alt: 'Landing page' },
    { src: fsLogin, alt: 'Login page' },
    { src: fsRegister, alt: 'Register page' },
    { src: fsDashboard, alt: 'Dashboard' },
    { src: fsDaftarBisnis, alt: 'Daftar Bisnis' },
    { src: fsDaftarPengeluaran, alt: 'Daftar Pengeluaran' },
    { src: fsDataPendapatan, alt: 'Data Pendapatan' },
  ],
  stressguard: [
    { src: sgMacbook15, alt: 'MacBook Air 15" Mockup' },
    { src: sgIphone17Mockup, alt: 'iPhone 17 Mockup' },
    { src: sgIphone16Mockup, alt: 'iPhone 16 Pro Mockup' },
    { src: sgMacbook2022, alt: 'MacBook Air 2022 Mockup' },
    { src: sgDashboardAnalisis, alt: 'Dashboard dengan Hasil Analisis' },
    { src: sgDashboard, alt: 'Dashboard Prediksi' },
    { src: sgLanding, alt: 'Landing Page' },
    { src: sgLogin, alt: 'Login Page' },
    { src: sgScreenCapture, alt: 'Landing Page Screen Capture' },
  ],
}

function ProjectImageCarousel({ title, imageKey }) {
  const images = projectImages[imageKey] || []
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <div className="project-carousel">
      <div className="carousel-viewport">
        {images.map((img, i) => (
          <img
            key={img.alt}
            className={`carousel-slide ${i === current ? 'is-active' : ''}`}
            src={img.src}
            alt={`${title} – ${img.alt}`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="carousel-controls">
          <div className="carousel-dots">
            {images.map((img, i) => (
              <button
                key={img.alt}
                type="button"
                className={`carousel-dot ${i === current ? 'is-active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`View ${img.alt}`}
              />
            ))}
          </div>
          <span className="carousel-counter">
            {current + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  )
}

function ProjectDetailsModal({ project, onClose }) {
  const images = projectImages[project.images] || []
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const [isAnimatedIn, setIsAnimatedIn] = useState(false)
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden'
    
    // Close on Escape key
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    // Delay image rendering to prevent entrance animation frame drops
    const timer = setTimeout(() => {
      setIsAnimatedIn(true)
    }, 350)
    
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [onClose])

  // Reset image loaded status when switching screenshots
  useEffect(() => {
    setIsImgLoaded(false)
  }, [activeImgIndex])

  const activeImage = images[activeImgIndex]

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="modal-body-layout">
          {/* Left Column: Image Explorer */}
          <div className="modal-image-panel">
            <div className="modal-active-viewport">
              {!isAnimatedIn ? (
                <div className="modal-loading-placeholder">
                  <div className="spinner"></div>
                  <span>Opening view...</span>
                </div>
              ) : activeImage ? (
                <>
                  {!isImgLoaded && (
                    <div className="modal-loading-placeholder absolute-center">
                      <div className="spinner"></div>
                      <span>Loading high-res preview...</span>
                    </div>
                  )}
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className={`modal-active-img ${isImgLoaded ? 'is-loaded' : 'is-loading'}`}
                    decoding="async"
                    loading="eager"
                    onLoad={() => setIsImgLoaded(true)}
                  />
                </>
              ) : (
                <div className="modal-no-image">No images available</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="modal-thumbnails">
                {images.map((img, i) => (
                  <button
                    key={img.alt}
                    type="button"
                    className={`modal-thumb-btn ${i === activeImgIndex ? 'is-active' : ''}`}
                    onClick={() => setActiveImgIndex(i)}
                  >
                    <img src={img.src} alt={`Thumbnail ${img.alt}`} decoding="async" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Project Description */}
          <div className="modal-info-panel">
            <div className="modal-header-meta">
              <span className="role-badge">{project.role}</span>
              <h2>{project.title}</h2>
            </div>

            <div className="modal-stack-list">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="modal-description-section">
              <p className="modal-long-desc">{project.longDescription}</p>
              {project.details && project.details.length > 0 && (
                <div className="modal-details-list">
                  <h3>Highlights & Contributions</h3>
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="button">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="button button-secondary">
                <FaExternalLinkAlt aria-hidden="true" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="modal-body-layout">
          <div className="modal-image-panel">
            <div className="modal-active-viewport">
              <iframe
                src={certificate.pdf}
                title={certificate.title}
                className="certificate-pdf-viewer"
              />
            </div>
          </div>

          <div className="modal-info-panel">
            <div className="modal-header-meta">
              <h2>{certificate.title}</h2>
            </div>
            <div className="modal-description-section">
              <p className="modal-long-desc">{certificate.issuer}</p>
            </div>
            <div className="modal-footer-actions">
              <a href={certificate.pdf} target="_blank" rel="noreferrer" className="button">
                Open PDF in new tab
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Projects({ onSelectProject }) {
  return (
    <Section id="projects" eyebrow="Projects 🚀" title="Selected work with product depth">
      <div className="project-grid">
        {projects.map((project, index) => (
          <MotionCard key={project.title} className="project-card" delay={index * 0.04}>
            {project.images && (
              <ProjectImageCarousel title={project.title} imageKey={project.images} />
            )}
            <div className="project-content">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                {project.role && <span className="card-role-badge">{project.role}</span>}
              </div>
              <p>{project.description}</p>
              <div className="stack-list" aria-label={`${project.title} technology stack`}>
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                {project.stack.length > 4 && (
                  <span className="stack-more">+{project.stack.length - 4} more</span>
                )}
              </div>
              <div className="project-actions">
                <button
                  type="button"
                  className="button-view-details"
                  onClick={() => onSelectProject(project)}
                >
                  View Details
                </button>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub link">
                    <FaGithub aria-hidden="true" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Demo link">
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional experience">
      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
          >
            <div className="timeline-dot" aria-hidden="true"></div>
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education background">
      <div className="education-grid">
        {education.map((item, index) => (
          <MotionCard key={item.degree} className="education-inner" delay={index * 0.05}>
            <div className="education-top">
              <span>{item.period}</span>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div>
              <h3>{item.degree}</h3>
              <p className="education-school">{item.school}</p>
            </div>
            <p className="education-description">{item.description}</p>
          </MotionCard>
        ))}
      </div>
    </Section>
  )
}

function Certifications({ onSelectCertificate }) {
  return (
    <Section id="certifications" eyebrow="Certifications 🏅" title="Learning and certification">
      <div className="certification-grid">
        {certifications.map((item, index) => (
          <MotionCard key={item.title} className="certification-card" delay={index * 0.04}>
            <button
              type="button"
              className="certificate-preview"
              onClick={() => onSelectCertificate(item)}
              aria-label={`View details for ${item.title}`}
            >
              <img src={item.image} alt={`${item.title} certificate`} loading="lazy" />
            </button>
            <div className="certificate-content">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>
              <button type="button" className="button" onClick={() => onSelectCertificate(item)}>
                View Details
              </button>
            </div>
          </MotionCard>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something focused">
      <div className="contact-grid">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" required></textarea>
          </label>
          <button className="button" type="submit">
            Send Message
            <FaArrowRight aria-hidden="true" />
          </button>
        </motion.form>

        <div className="contact-panel">
          <p>
            Terbuka untuk kolaborasi, project web development, eksplorasi AI, dan kesempatan
            magang atau kerja di bidang software development.
          </p>
          <div className="social-list">
            {profile.socials.map((social) => {
              const Icon = social.icon
              const isExternal = social.href.startsWith('http')
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <Icon aria-hidden="true" />
                  <span>{social.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Copyright 2026 {profile.name}. Built with React, Vite, and Tailwind CSS.</p>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState('light')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell" data-theme={theme}>
      {!selectedProject && !selectedCertificate && <Navbar theme={theme} onToggleTheme={toggleTheme} />}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Experience />
        <Education />
        <Certifications onSelectCertificate={setSelectedCertificate} />
        <Contact />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}

export default App
