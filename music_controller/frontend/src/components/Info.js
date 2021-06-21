import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, IconButton } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Link} from 'react-router-dom';



const pages = {
    JOIN : 'pages.Join',
    CREATE : 'pages.Create',
}
export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    const joinInfo = () => {
        return (
            <React.Fragment>
                <h3>Join page</h3>
                <p>A page to join a room if you have a code. You can join an already created room and be a part of 
                    that Musify Group! Play/Pause a song if the host has given you permission to do so. Skip a song or 
                    listen to the previous song by clicking on the buttons and casting your vote. Once the required 
                    number of votes is reached, the action will be taken. You can also leave a room if you want to
                    and join back later with the same code.<br/>Have Fun!</p>              
            </React.Fragment>
        );
    }
    const createInfo = () => {
        return (
            <React.Fragment>
                <h3>Create page</h3>
                <p>A page to create a room. You have to log in to your Spotify Account to create a room. Each room 
                    has a unique code, share it with your friends who can use it to now join your room. You can 
                    play/pause a song and skip it or return to the previous song whenever you want. Guests can 
                    play/pause a song if you give them permission to do so. Guests can also skip a song or return to 
                    the previous song if the necessary number of votes have been received. You can set the number of 
                    votes needed in the settings tab. Once you leave the room, it will be deleted.<br/>Have Fun!</p>              
            </React.Fragment>
        );
    }
    
    useEffect(() => {
        console.log("Test");
        return () => console.log("Cleaned");
    });

    return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h2" variant="h2">
                        What is Musify?
                        <Typography component="h5" variant="h5">
                            Musify is an app to listen to music with your friends. Create a room and invite others, 
                            now everyone in it can control which song to listen to. Runs with the help of Spotify.
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="body1">
                        { page === pages.JOIN ? joinInfo() : createInfo()}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <IconButton onClick={() => {
                        page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
                        }}
                >
                        { page === pages.CREATE ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
                </IconButton>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" to="/" component={Link} disableElevation>
                        Back
                    </Button>
                </Grid>
            </Grid>
    );    
}
