import { useEffect } from 'react'
import B2BCaseStudy from './B2BCaseStudy'
import styles from './B2BDashboardCase.module.css'

function B2BDashboardCase() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'BeanGo Admin 后台管理系统 — Yuxin Portfolio'
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#b2b-top">跳至项目内容</a>
      <header className={styles.siteHeader}>
        <a className={styles.siteBrand} href="/" aria-label="Yuxin 首页">Yuxin</a>
        <nav className={styles.siteLinks} aria-label="Portfolio navigation">
          <a href="/#projects">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className={styles.backLink} href="/#projects">Back to work <span aria-hidden="true">↗</span></a>
      </header>
      <B2BCaseStudy />
    </div>
  )
}

export default B2BDashboardCase
