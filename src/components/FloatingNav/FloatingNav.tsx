import { scrollToSection } from '../../utils/scrollToSection'
import styles from './FloatingNav.module.css'

type NavigationItem = {
  label: string
  targetId: string
}

const navigationItems: NavigationItem[] = [
  { label: 'About', targetId: 'about-me' },
  { label: '作品', targetId: 'projects' },
  { label: 'AIGC', targetId: 'aigc' },
  { label: 'Skills', targetId: 'skills' },
  { label: 'Contact', targetId: 'contact' },
]

function FloatingNav() {
  return (
    <nav className={styles.navigation} aria-label="作品集章节导航">
      <button
        className={`${styles.navigationButton} ${styles.brandButton}`}
        type="button"
        onClick={() => scrollToSection('hero')}
      >
        <span className={styles.brandDot} aria-hidden="true" />
        AI Designer
      </button>

      <span className={styles.divider} aria-hidden="true" />

      <div className={styles.navigationLinks}>
        {navigationItems.map((item) => (
          <button
            className={styles.navigationButton}
            type="button"
            onClick={() => scrollToSection(item.targetId)}
            key={item.targetId}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default FloatingNav
