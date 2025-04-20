import { Grid } from '@mui/material'
import React from 'react'
import Styles from '../../styles/CardButton.module.css'
import { ICON } from '../../assets/assets'
import { Constant } from '../../shared/const'

type CardButtonType = {
    dayPassPrice: number
}

const CardButton = ({ dayPassPrice }: CardButtonType) => {
    return (
        <Grid container className={Styles.cardContentContainer} spacing={1}>
            <Grid size={{ xs: 6 }}>
                <button className={Styles.dayPassButton}>
                    <div className={Styles.buttonDetails}>
                        <span className={Styles.dayPass}>{Constant.dayPass}</span>
                        <span className={Styles.dayPassValue}> {`₹ ${dayPassPrice}`} <span className={Styles.daysCount}>/Day</span></span>
                    </div>
                    <div>
                        <img src={ICON.Arrow} alt={'procced'} width={24} />
                    </div>
                </button>
            </Grid>
            <Grid size={{ xs: 6 }}>
                <div className={Styles.bulkPassContainer}>
                    <div className={Styles.discountBadge}>
                        {Constant.twentyPercentDiscount}
                    </div>
                    <button className={Styles.bulkPassButton}>
                        <div className={Styles.buttonDetails}>
                            <span className={Styles.dayPass}>{Constant.bulkPass}</span>
                            <span className={Styles.dayPassValue}> ₹ 2400 <span className={Styles.daysCount}>/10 Days</span></span>
                        </div>
                        <div>
                            <img src={ICON.Arrow} alt={'procced'} width={24} />
                        </div>
                    </button>
                </div>
            </Grid>
        </Grid>
    )
}

export default CardButton