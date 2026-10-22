import type { ReactElement, ReactNode } from 'react'
import type { BeanGoSection } from '../../pages/BeanGoCase/beanGoCaseData'
import styles from './CaseSection.module.css'

type CaseSectionProps = {
  section: BeanGoSection
  customRenderers?: Record<string, ReactNode>
}

type SectionContentProps = {
  section: BeanGoSection
  customRenderers?: Record<string, ReactNode>
}

function SectionContent({ section, customRenderers }: SectionContentProps): ReactNode {
  if (section.type === 'image') {
    return (
      <figure className={styles.mediaFrame} data-section-media>
        <img
          src={section.image}
          alt={section.alt}
          width={section.width}
          height={section.height}
          loading="lazy"
          decoding="async"
        />
      </figure>
    )
  }

  if (section.type === 'video') {
    return (
      <figure className={styles.mediaFrame} data-section-media>
        <video src={section.src} poster={section.poster} controls playsInline preload="metadata" />
        {section.caption && <figcaption>{section.caption}</figcaption>}
      </figure>
    )
  }

  return <div className={styles.customContent}>{customRenderers?.[section.renderer] ?? null}</div>
}

function CaseSection({ section, customRenderers }: CaseSectionProps): ReactElement {
  const headingId = `${section.id}-title`

  return (
    <section
      id={section.id}
      className={styles.section}
      aria-labelledby={headingId}
      data-beango-section
      data-case-reveal
    >
      <header className={styles.header}>
        <span>{section.index}</span>
        <h2 id={headingId}>{section.title}</h2>
        <span>{section.navLabel}</span>
      </header>
      <SectionContent section={section} customRenderers={customRenderers} />
    </section>
  )
}

export default CaseSection
