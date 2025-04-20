import React from 'react'
import styles from '../../styles/Common.module.css'

interface ISectionHeading{
    children: string
}

const SectionHeading = ({children}: ISectionHeading) => {
  return (
    <span className={styles.sectionHeader}>
        {children}
    </span>
  )
}

export default SectionHeading