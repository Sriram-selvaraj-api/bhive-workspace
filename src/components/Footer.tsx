import { Box } from '@mui/material';
import styles from '../styles/Footer.module.css'
import { Constant } from '../shared/const';

const Footer = () => (
  <Box
    component="footer"
    className={styles.footerBox}
  >
    <span className={styles.copyRightText}>
      {Constant.copyRight}
    </span>
  </Box>
);

export default Footer;