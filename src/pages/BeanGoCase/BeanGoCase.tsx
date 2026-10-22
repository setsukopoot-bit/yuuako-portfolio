import { useEffect } from 'react'
import type { ReactElement } from 'react'
// @ts-ignore The migrated case study remains source-of-truth JSX from the standalone Vite project.
import StandaloneBeanGoApp from './standalone/StandaloneBeanGoApp.jsx'
import './standalone/standalone.css'
import styles from './BeanGoCase.module.css'

function BeanGoCase(): ReactElement {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'BeanGo 豆趣 — Yuxin Portfolio'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#case-content">
        跳至项目内容
      </a>

      <header className={styles.siteHeader}>
        <a className={styles.siteBrand} href="/" aria-label="Yuxin 首页">
          Yuxin
        </a>
        <nav className={styles.siteLinks} aria-label="Portfolio navigation">
          <a href="/#projects">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className={styles.backLink} href="/#projects">
          Back to work <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="case-content">
        <StandaloneBeanGoApp />
      </main>

      <footer className={styles.footer}>
        <div>
          <span>BeanGo / 豆趣</span>
          <p>More chapters are coming.</p>
        </div>
        <a href="/#projects">
          回到项目列表 <span aria-hidden="true">→</span>
        </a>
      </footer>
    </div>
  )
}

export default BeanGoCase
