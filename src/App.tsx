import { useCallback, useState } from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import FinalSection from './components/FinalSection/FinalSection'
import FloatingNav from './components/FloatingNav/FloatingNav'
import Hero from './components/Hero/Hero'
import IntroOverlay from './components/IntroOverlay/IntroOverlay'
import Projects from './components/Projects/Projects'
import B2BDashboardCase from './pages/B2BDashboardCase/B2BDashboardCase'
import BeanGoCase from './pages/BeanGoCase/BeanGoCase'
import IconSystemGuide from './pages/IconSystemGuide/IconSystemGuide'
import ProjectPlaceholder from './pages/ProjectPlaceholder/ProjectPlaceholder'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const forceIntroPreview = new URLSearchParams(window.location.search).has('preview-intro')
  const [showIntro, setShowIntro] = useState(
    () => pathname === '/' && (forceIntroPreview || sessionStorage.getItem('portfolio-intro-played') !== 'true'),
  )
  const [showPortfolio, setShowPortfolio] = useState(() => !showIntro)

  const revealPortfolio = useCallback(() => {
    setShowPortfolio(true)
  }, [])

  const completeIntro = useCallback(() => {
    sessionStorage.setItem('portfolio-intro-played', 'true')
    setShowPortfolio(true)
    setShowIntro(false)
  }, [])

  if (pathname === '/projects/beango') {
    return <BeanGoCase />
  }

  if (pathname === '/beango/icon-system') {
    return <IconSystemGuide />
  }

  if (pathname === '/projects/b2b-dashboard') {
    return <B2BDashboardCase />
  }

  if (pathname === '/projects/ai-video') {
    return (
      <ProjectPlaceholder
        category="AI VIDEO / GENERATIVE AI"
        title="AI 视频创作"
        subtitle="AI Video Creation"
      />
    )
  }

  return (
    <>
      {showIntro && (
        <IntroOverlay onComplete={completeIntro} onRevealStart={revealPortfolio} />
      )}
      {showPortfolio && (
        <>
          <FloatingNav />
          <Hero />
          <AboutMe />
          <Projects />
          <Contact />
          <FinalSection />
        </>
      )}
    </>
  )
}

export default App
