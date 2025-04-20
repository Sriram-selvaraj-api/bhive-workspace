import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ICON, LOGO } from '../assets/assets';
import styles from '../styles/Header.module.css'

const Header: React.FC = () => (
    <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar className={styles.toolbar}>
            <img src={LOGO.BhiveLogo} alt='bhive-logo' />
            <button className={styles.iconButton}>
                <img src={ICON.Call} alt='call' />
            </button>
        </Toolbar>
    </AppBar>
);

export default Header;
