import type { ReactNode } from 'react'
import { b2bAssets } from '../data/b2bAssets'
import { sectionTitles, surfaces } from '../data/b2bCaseStudy'

type BilingualProps = {
  zh: ReactNode
  en: ReactNode
  className?: string
}

export function Bilingual({ zh, en, className = 'bilingual' }: BilingualProps) {
  return (
    <span className={className}>
      <span className="bilingual-cn">{zh}</span>
      <span className="bilingual-en">{en}</span>
    </span>
  )
}

export function SectionTitle({ title }: { title: string }) {
  const [zh, en] = sectionTitles[title] ?? [title, title]
  return <Bilingual zh={zh} en={en} className="section-title" />
}

export function SectionHeading({ number, title, intro }: { number: string; title: string; intro: string }) {
  return (
    <div className="section-heading">
      <div className="section-number">{number}</div>
      <div>
        <h2><SectionTitle title={title} /></h2>
        <p>{intro}</p>
      </div>
    </div>
  )
}

function screenFor(route: string) {
  return surfaces.find((surface) => surface.route === route)?.screen ?? 'workbench'
}

export function StaticSurface({ route, compact = false, showStatus = true }: { route: string; compact?: boolean; showStatus?: boolean }) {
  const screen = screenFor(route)
  return (
    <div className={`surface-frame${compact ? ' surface-frame--compact' : ''}`}>
      <div className="surface-chrome">
        <span className="traffic traffic--red" />
        <span className="traffic traffic--yellow" />
        <span className="traffic traffic--green" />
        <span className="surface-url">BeanGo Admin · {route}</span>
        <span className="live-dot"><Bilingual zh="静态截图" en="Static Capture" /></span>
      </div>
      <div className="surface-image-wrap">
        <img src={b2bAssets.screens[screen]} alt={`BeanGo Admin ${route} 真实页面截图`} loading="lazy" />
        {showStatus && <span className="live-link live-link--static">Static Interface</span>}
      </div>
    </div>
  )
}

export function ChartGlyph({ kind }: { kind: string }) {
  const common = { viewBox: '0 0 64 44', role: 'img', 'aria-label': `${kind} chart`, focusable: false } as const
  const marks: Record<string, ReactNode> = {
    line: <polyline points="5,35 17,26 28,30 41,13 58,20" />,
    area: <><polygon className="fill" points="5,35 17,26 28,30 41,13 58,20 58,39 5,39" /><polyline points="5,35 17,26 28,30 41,13 58,20" /></>,
    'stacked-area': <><polygon className="fill mint" points="5,34 18,28 30,31 43,19 58,23 58,39 5,39" /><polygon className="fill sun" points="5,28 18,21 30,25 43,12 58,17 58,23 43,19 30,31 18,28 5,34" /><polyline points="5,28 18,21 30,25 43,12 58,17" /></>,
    funnel: <path className="funnel" d="M7 8h50L47 18H17L7 8Zm10 12h30l-5 9H22l-5-9Zm7 11h16l-4 8H28l-4-8Z" />,
    bar: <><rect x="7" y="21" width="8" height="18" /><rect x="21" y="14" width="8" height="25" /><rect x="35" y="25" width="8" height="14" /><rect x="49" y="8" width="8" height="31" /></>,
    'stacked-bar': <><rect x="7" y="28" width="9" height="11" /><rect className="sun" x="7" y="19" width="9" height="9" /><rect x="23" y="22" width="9" height="17" /><rect className="sun" x="23" y="10" width="9" height="12" /><rect x="39" y="25" width="9" height="14" /><rect className="sun" x="39" y="16" width="9" height="9" /></>,
    'horizontal-bar': <><rect x="7" y="8" width="39" height="6" /><rect className="sun" x="7" y="19" width="28" height="6" /><rect className="mint" x="7" y="30" width="46" height="6" /></>,
    radar: <><polygon className="radar-grid" points="32,5 56,22 47,39 17,39 8,22" /><polygon className="radar-shape" points="32,11 46,23 40,32 22,29 17,21" /><line x1="32" y1="5" x2="32" y2="39" /><line x1="8" y1="22" x2="56" y2="22" /></>,
    heatmap: <><rect className="heat-1" x="6" y="6" width="11" height="9" /><rect className="heat-2" x="19" y="6" width="11" height="9" /><rect className="heat-3" x="32" y="6" width="11" height="9" /><rect className="heat-4" x="45" y="6" width="11" height="9" /><rect className="heat-3" x="6" y="18" width="11" height="9" /><rect className="heat-4" x="19" y="18" width="11" height="9" /><rect className="heat-1" x="32" y="18" width="11" height="9" /><rect className="heat-2" x="45" y="18" width="11" height="9" /><rect className="heat-4" x="6" y="30" width="11" height="9" /><rect className="heat-2" x="19" y="30" width="11" height="9" /><rect className="heat-3" x="32" y="30" width="11" height="9" /><rect className="heat-1" x="45" y="30" width="11" height="9" /></>,
    donut: <><circle className="donut-track" cx="32" cy="22" r="15" /><circle className="donut-value" cx="32" cy="22" r="15" /></>,
    pie: <><path className="pie-base" d="M32 22V6a16 16 0 0 1 14 24Z" /><path className="pie-slice" d="M32 22 18 31a16 16 0 0 1 14-25Z" /><path className="pie-slice mint" d="M32 22 46 30a16 16 0 0 1-28 1Z" /></>,
    gauge: <><path className="gauge-track" d="M10 35a22 22 0 0 1 44 0" /><path className="gauge-value" d="M10 35a22 22 0 0 1 31-19" /><line className="gauge-needle" x1="32" y1="35" x2="42" y2="19" /><line className="tick" x1="13" y1="29" x2="16" y2="28" /><line className="tick" x1="32" y1="13" x2="32" y2="9" /><line className="tick" x1="51" y1="29" x2="48" y2="28" /></>,
    'percent-stack': <><rect className="orange" x="6" y="16" width="20" height="12" /><rect className="sun" x="26" y="16" width="17" height="12" /><rect className="mint" x="43" y="16" width="15" height="12" /></>,
    progress: <><rect className="progress-track" x="6" y="16" width="52" height="12" rx="6" /><rect className="progress-value" x="6" y="16" width="34" height="12" rx="6" /></>,
    'percent-bar': <><rect x="9" y="21" width="8" height="18" /><rect className="sun" x="24" y="13" width="8" height="26" /><rect className="mint" x="39" y="7" width="8" height="32" /><text x="11" y="16">%</text><text x="26" y="9">%</text><text x="41" y="5">%</text></>,
    box: <><line className="box-line" x1="10" y1="22" x2="54" y2="22" /><line className="box-line" x1="16" y1="13" x2="16" y2="31" /><line className="box-line" x1="48" y1="13" x2="48" y2="31" /><rect className="box-body" x="22" y="13" width="20" height="18" /><line className="box-median" x1="32" y1="13" x2="32" y2="31" /></>,
    histogram: <><rect x="6" y="29" width="9" height="10" /><rect x="16" y="20" width="9" height="19" /><rect className="sun" x="26" y="9" width="9" height="30" /><rect className="sun" x="36" y="17" width="9" height="22" /><rect x="46" y="27" width="9" height="12" /></>,
    bubble: <><circle className="bubble-orange" cx="17" cy="28" r="7" /><circle className="bubble-sun" cx="34" cy="16" r="11" /><circle className="bubble-mint" cx="49" cy="30" r="5" /></>,
    scatter: <><circle cx="10" cy="32" r="3" /><circle className="sun" cx="19" cy="25" r="3" /><circle className="mint" cx="29" cy="29" r="3" /><circle cx="37" cy="14" r="3" /><circle className="sun" cx="47" cy="20" r="3" /><circle className="mint" cx="55" cy="9" r="3" /></>,
  }

  return <svg className={`chart-svg chart-svg--${kind}`} {...common}><line className="axis" x1="5" y1="39" x2="59" y2="39" />{marks[kind]}</svg>
}
