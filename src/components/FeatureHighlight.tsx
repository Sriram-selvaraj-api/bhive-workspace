import React, { useState } from 'react';
import { useFeatureHighlight } from '../context/FeatureHighlightContext';
import SectionHeading from './common/SectionHeading';
import Styles from '../styles/Featurehighlight.module.css'
import { Grid } from '@mui/material';
import { Constant } from '../shared/const';

const FeatureHighLight = () => {
    const [hoveredFeature, setHoveredFeature] = useState<number | undefined>(undefined)
    const { whyChooseUs } = useFeatureHighlight();

    return (
        <div className={Styles.whyChooseUs}>
            <SectionHeading>
                Why Choose us?
            </SectionHeading>
            <Grid container className={Styles.featureItemsContainer} spacing={{xs: 1, md: 0}}>
                {whyChooseUs.map((item, index) => (
                    <Grid className={hoveredFeature === index ? Styles.featureCardHovered : Styles.featureCard} key={index} onMouseEnter={()=> setHoveredFeature(index)} onMouseLeave={()=>setHoveredFeature(undefined)} size={{ xs: 6, md: 3, lg:3 }}>
                        <img src={item.icon} alt='icon' width={32} height={32} />
                        <div className={Styles.featureContentDiv}>
                            <span className={hoveredFeature === index ? Styles.titleHovered : Styles.title}>{item.title}</span>
                            {hoveredFeature === index &&
                                <span className={Styles.featureContent}>{Constant.oneLinearDetail}</span>
                            }       
                        </div>

                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default FeatureHighLight;
