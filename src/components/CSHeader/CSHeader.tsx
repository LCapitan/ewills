import styles from './CSHeader.module.scss'

interface CaseStudyHeaderProps {
  title: string,
  tags: Array<string>,
  children: any,
  forWhat: string,
  timeline: string,
  tools: string,
  role: string
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  tags,
  children,
  forWhat,
  timeline,
  tools,
  role,
}) => {
  return (
    <div className={styles.caseStudyHeader}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.tags}>
          {tags && tags.map((tag, i) =>
            <span key={tags[i]}>{tag}</span>
          )}
        </div>
      </div>

      <div className={styles.rightRail}>
        <div className={styles.rightRailItem}>
          <span>For</span>
          {forWhat}
        </div>
        <div className={styles.rightRailItem}>
          <span>Timeline</span>
          {timeline}
        </div>
        <div className={styles.rightRailItem}>
          <span>Tools</span>
          {tools}
        </div>
        <div className={styles.rightRailItem}>
          <span>Role</span>
          {role}
        </div>
      </div>
    </div>
  )
}

export default CaseStudyHeader;
