import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import { IMAGES } from '../assets/assets';
import SectionHeading from './common/SectionHeading';
import { Constant } from '../shared/const';
import Styles from '../styles/Promotion.module.css'


const DownloadSection = () => (
  <Box className={Styles.promotionBox}>
    <SectionHeading>
      {Constant.downloadYourAppNow}
    </SectionHeading>
    <div className={Styles.cardDiv}>
      <Card className={Styles.card}>
        <Grid container>
          <Grid className={Styles.mobileGrid} size={{ xs: 12, md: 7, lg: 6 }}>
            <img alt='app-image' className={Styles.mobileImage} src={IMAGES.AppImage} />
          </Grid>
          <Grid className={Styles.contentImageGrid} size={{ xs: 12, md: 5, lg: 6 }}>
            <p className={Styles.boostContent}>{Constant.boostYourProduction}</p>
            <div className={Styles.storeImageDiv}>
              <a href="https://play.google.com/store/search?q=bhive+workspace&c=apps&hl=en_IN" rel="noreferrer" target="_blank"> <img alt='play-store' src={IMAGES.PlayStore} width={146} /> </a>
              <a href="https://apps.apple.com/in/app/bhive-workspace/id6463923684" rel="noreferrer" target="_blank"><img alt='app-store' className={Styles.appStore} src={IMAGES.AppStore} width={132} /></a>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  </Box>
);

export default DownloadSection;