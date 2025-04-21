import React, { useEffect, useState } from "react";
import { Space } from "../types/ApiType";
import Styles from "../styles/SpaceOverview.module.css"
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import SectionHeading from "./common/SectionHeading";
import { Constant } from "../shared/const";
import CardButton from "./common/CardButton";
import { ICON } from "../assets/assets";

const SpacesList: React.FC = () => {
    const [spaces, setSpaces] = useState<Space[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSpaces = async () => {
            const maxRetries = 5;
            let attempts = 0;
            let success = false;
    
            while (attempts < maxRetries && !success) {
                try {
                    const response = await fetch(`https://bhive-api.onrender.com/workspace`);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data: Space[] = await response.json();
                    setSpaces(data);
                    success = true;
                } catch (error) {
                    attempts++;
                    console.error(`Attempt ${attempts} failed:`, error);
                    if (attempts < maxRetries) {
                        await new Promise(res => setTimeout(res, 1000)); // wait 1 second before retrying
                    }
                } finally {
                    if (attempts === maxRetries || success) {
                        setLoading(false);
                    }
                }
            }
        };
    
        fetchSpaces();
    }, []);
    

    if (loading) return <p className={Styles.loaderHead}><span className={Styles.loader}></span></p>;

    return (
        <Grid container className={Styles.spaceOverviewContainer}>
            <SectionHeading>
                {Constant.ourSpaceOverView}
            </SectionHeading>

            <Grid container className={Styles.cardContainer} spacing={6}>
                {spaces.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                        <Card className={Styles.card}>
                            <Grid container className={Styles.cardNameContainer}>
                                <Grid size={{ xs: 8 }}>
                                    <span className={Styles.cardName}>{item.name}</span>
                                </Grid>
                                {item.google_maps_url &&
                                    <Grid className={Styles.navigationItem} size={{ xs: 4 }}>
                                        <a href={item.google_maps_url} target="_blank" rel="noopener noreferrer">
                                            <img className={Styles.navigationIcon} src={ICON.Navigation} alt='navigation' />
                                        </a>
                                    </Grid>
                                }
                            </Grid>
                            <CardMedia
                                className={Styles.image}
                                component="img"
                                width="346"
                                height="202"
                                image={item.images[0]}
                                alt={item.name}
                            />
                            <CardContent className={Styles.cardContent}>
                                <CardButton 
                                    dayPassPrice={item.day_pass_price}    
                                />
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default SpacesList;
