import { Grid } from '@mui/material'
import Styles from '../styles/Introduction.module.css'
import Lottie from 'lottie-react';
import WorkerJson from '../assets/worker.json'

const Introduction = () => {
  return (
    <Grid container className={Styles.introContainer}>
      <Grid size={{ xs: 12, md: 6, lg: 7 }} className={Styles.content}>
        <span className={Styles.heading}>Host your meeting with world-class amenities. Starting at <span className={Styles.highlighting}>₹199/-!</span></span>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }} className={Styles.visualContent}>
        <Lottie animationData={WorkerJson}  />
      </Grid>
    </Grid>
  )
}

export default Introduction