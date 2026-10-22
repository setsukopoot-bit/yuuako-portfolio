import type { ReactElement } from 'react'
import { beanGoIconCategories } from '../../pages/BeanGoCase/beangoIcons'
import styles from './IconSystemSection.module.css'

function IconSystemSection(): ReactElement {
  return (
    <div className={styles.iconSystem}>
      <div className={styles.intro}>
        <div>
          <span className={styles.kicker}>ICON SYSTEM / 图标系统</span>
          <h3>让每一个入口，都说同一种品牌语言。</h3>
        </div>
        <div className={styles.introCopy}>
          <p className={styles.lead}>
            围绕不同产品场景建立统一的图标语言，兼顾品牌识别、功能语义与小尺寸可读性。
          </p>
          <p>
            BeanGo 图标体系结合拟物图标、面性图标和线性图标，围绕咖啡探索、AI
            服务、地图发现、记录与社区等场景，建立统一但具有层级差异的视觉语言。
          </p>
          <span className={styles.iconCount}>27 ORIGINAL PNG ICONS</span>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {beanGoIconCategories.map((category) => (
          <article
            key={category.id}
            className={`${styles.categoryCard} ${category.layout === 'wide' ? styles.categoryWide : ''}`}
            data-case-reveal
          >
            <header className={styles.categoryHeader}>
              <div>
                <span>{category.index}</span>
                <h4>{category.title}</h4>
                <p>{category.englishTitle}</p>
              </div>
              <span className={styles.categoryCount}>{String(category.icons.length).padStart(2, '0')} ITEMS</span>
            </header>

            <div className={styles.iconGrid}>
              {category.icons.map((icon) => (
                <figure key={icon.src} className={styles.iconItem}>
                  <img src={icon.src} alt={icon.alt} loading="lazy" decoding="async" />
                  <figcaption>{icon.name}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.sectionFooter}>
        <div>
          <span>COMPLETE SPECIFICATION</span>
          <p>查看完整分类、图标名称与原始尺寸展示。</p>
        </div>
        <a href="/beango/icon-system">
          查看完整图标规范 <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}

export default IconSystemSection
