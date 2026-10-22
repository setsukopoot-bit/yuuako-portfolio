import type { ReactElement } from 'react'
import styles from './ProjectPlaceholder.module.css'

type ProjectPlaceholderProps = {
  category: string
  subtitle: string
  title: string
}

function ProjectPlaceholder({ category, subtitle, title }: ProjectPlaceholderProps): ReactElement {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/">
          Yuxin
        </a>
        <a className={styles.backLink} href="/#projects">
          Back to work <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.content} aria-labelledby="placeholder-title">
        <p className={styles.category}>{category}</p>
        <h1 id="placeholder-title">{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.status}>
          <span>CASE STUDY</span>
          <span>COMING SOON</span>
        </div>
      </section>
    </main>
  )
}

export default ProjectPlaceholder
