import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

function Cards( { data: {active, cases, deaths, recovered}}) {
    return (
        <div className = "container">
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} className = "cards__card , card__infected">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Total Infected </Typography>
                        <Typography variant = "h5">
                        <CountUp 
                            start = {0}
                            end={cases}
                            duration = {2.5}
                            separator = ","
                        />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} className = "cards__card , card__recovered">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant = "h5"> 
                        <CountUp 
                            start = {0}
                            end={recovered}
                            duration = {2.5}
                            separator = ","
                        />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} className = "cards__card , card__deaths">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant = "h5"> 
                        <CountUp 
                            start = {0}
                            end={deaths}
                            duration = {2.5}
                            separator = ","
                        />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} className = "cards__card , card__active">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Total Active Cases </Typography>
                        <Typography variant = "h5"> 
                        <CountUp 
                            start = {0}
                            end={active}
                            duration = {2.5}
                            separator = ","
                        />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;