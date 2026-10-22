import { useEffect } from 'react'
import type { ReactElement } from 'react'
import { beanGoIconCategories } from '../BeanGoCase/beangoIcons'
import styles from './IconSystemGuide.module.css'

function IconSystemGuide(): ReactElement {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'BeanGo Icon System — Yuxin Portfolio'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.siteHeader}>
        <a href="/" className={styles.brand}>Yuxin</a>
        <a href="/projects/beango#icon-system" className={styles.backLink}>
          返回 BeanGo 项目 <span aria-hidden="true">↙</span>
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="icon-guide-title">
          <div className={styles.heroEyebrow}>BEANGO DESIGN SYSTEM / 2026</div>
          <div className={styles.heroTitleRow}>
            <div>
              <h1 id="icon-guide-title">Icon System</h1>
              <p className={styles.heroCn}>图标系统</p>
            </div>
            <span className={styles.heroMark}>27</span>
          </div>
          <p className={styles.heroLead}>
            围绕不同产品场景建立统一的图标语言，兼顾品牌识别、功能语义与小尺寸可读性。
          </p>
          <p className={styles.heroDescription}>
            BeanGo 图标体系结合拟物图标、面性图标和线性图标，围绕咖啡探索、AI
            服务、地图发现、记录与社区等场景，建立统一但具有层级差异的视觉语言。
          </p>
          <div className={styles.meta}>
            <span>27 个原始 PNG</span>
            <span>透明背景</span>
            <span>5 个使用场景</span>
          </div>
        </section>

        <section className={styles.guideGrid} aria-label="BeanGo 图标完整分类">
          {beanGoIconCategories.map((category) => (
            <article
              key={category.id}
              className={`${styles.category} ${category.layout === 'wide' ? styles.categoryWide : ''}`}
            >
              <header className={styles.categoryHeader}>
                <div>
                  <span>{category.index} / 05</span>
                  <h2>{category.title}</h2>
                  <p>{category.englishTitle}</p>
                </div>
                <span className={styles.categoryCount}>{String(category.icons.length).padStart(2, '0')} ITEMS</span>
              </header>

              <div className={styles.icons}>
                {category.icons.map((icon) => (
                  <figure key={icon.src} className={styles.iconItem}>
                    <div className={styles.iconStage}>
                      <img src={icon.src} alt={icon.alt} decoding="async" />
                    </div>
                    <figcaption>{icon.name}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <div>
            <span>BEANGO / ICON SYSTEM</span>
            <p>Warm, clear and ready for every coffee moment.</p>
          </div>
          <a href="/projects/beango#icon-system">
            返回 BeanGo 项目 <span aria-hidden="true">→</span>
          </a>
        </footer>
      </main>
    </div>
  )
}

export default IconSystemGuide
