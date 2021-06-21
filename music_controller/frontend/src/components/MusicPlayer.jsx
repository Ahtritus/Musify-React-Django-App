import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
  }

  skipSong() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/spotify/skip", requestOptions);
  }

  prevSong() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/spotify/prev", requestOptions);
  }

  pauseSong() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/spotify/pause", requestOptions);
  }

  playSong() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/spotify/play", requestOptions);
  }

  render() {
    const songProgress = (this.props.time / this.props.duration) * 100;

    return (
      <Card>
        <Grid container alignItems="center">
          <Grid item xs={4} align="center">
            <img src={this.props.image_url} height="100%" width="100%" />
          </Grid>
          <Grid item xs={8} align="center">
            <Typography component="h5" variant="h5">
              {this.props.title}{"hello"}
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              {this.props.artist}
            </Typography>
            
            <Typography color="textSecondary" variant="subtitle1">
              {this.props.votePrev} / {" "}{this.props.votes_required}
            </Typography>
            <div>
              <IconButton>
                <SkipPreviousIcon onClick={() => this.prevSong()}/>
              </IconButton>
              <IconButton 
                onClick={() => {
                  this.props.is_playing ? this.pauseSong() : this.playSong();
                }}
              >
                {this.props.is_playing ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
              <IconButton>
                <SkipNextIcon onClick={() => this.skipSong()}/>
              </IconButton>
            </div>
            <Typography color="textSecondary" variant="subtitle1">
              {this.props.voteSkip} / {" "}{this.props.votes_required}
            </Typography>
          </Grid>
        </Grid>
        <LinearProgress variant="determinate" value={songProgress} />
      </Card>
    );
  }
}