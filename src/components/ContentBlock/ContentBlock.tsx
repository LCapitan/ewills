import Link from "next/link";
import Image from "next/image";

import styles from './ContentBlock.module.scss'

interface ContentBlockProps {
  title: string,
  subtitle?: string
  children?: any
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <div className={styles.contentBlock}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <h3>{subtitle}</h3>
        {children}
      </div>
    </div>
  )
}

export default ContentBlock;
