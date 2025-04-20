import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DownloadSection from '../components/Promotion'
import styles from '../styles/Common.module.css'
import FeatureHighLight from '../components/FeatureHighlight'
import Introduction from '../components/Introduction'
import SpacesList from '../components/SpaceOverview'

const Homepage = () => {
  return (
    <>
        <Header />
        <Introduction />
          <div className={styles.bodyDiv}>
            <FeatureHighLight />
            <SpacesList />
            <DownloadSection />
          </div>
        <Footer />
    </>
  )
}

export default Homepage