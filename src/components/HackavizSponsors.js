import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useHackavizSponsors from '../hooks/useHackavizSponsors';
import usePics from '../hooks/usePics';

import { getPic } from '../helper';

const useStyles = makeStyles(theme => ({
  imageGridContainer: {
    backgroundColor: 'white',
    padding: theme.spacing(1,0),
  },
  imageContainer: {
    maxWidth: 150,
    
  },
}));

const HackavizSponsors = ({ currentHackaviz }) => {
  const classes = useStyles();
  const hackavizSponsors = useHackavizSponsors().filter(({ hackaviz }) => hackaviz === currentHackaviz);
  const sponsorsPics = usePics().filter(({ relativeDirectory }) => relativeDirectory === 'sponsor-pics');

  return (
    <Grid 
      container 
      spacing={2}
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.imageGridContainer}
    >
      {hackavizSponsors.map(({ sponsor_pic }) => {
        const sponsorPic = getPic(sponsorsPics, sponsor_pic);
        return (
          <Grid item className={classes.imageContainer}>
            <GatsbyImage image={sponsorPic} alt={sponsor_pic}/>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default HackavizSponsors