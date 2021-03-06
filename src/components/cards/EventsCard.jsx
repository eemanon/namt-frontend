import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import MainPageCard from './MainPageCard.jsx';

var imagepath = require('../../backendPath.js').imagepath

const styles = {
  media: {
    height: '200px',
  },
};

function CustomCard(props) {
  const { classes } = props;
  return (
      <MainPageCard className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imagepath+'/images/voie_ferree.jpg'}
          title="Présentation"
        />
        <CardContent>
          <Typography type="headline" component="h3">
            Faire voyager !
          </Typography>
          <Typography component="p">
            Evénement.
          </Typography>
        </CardContent>
      </MainPageCard>
  );
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);
