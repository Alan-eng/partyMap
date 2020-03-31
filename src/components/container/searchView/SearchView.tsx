import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  fetchUsers,
  fetchBasket,
} from '../../../actions/actions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DistanceSlider from './sliders/DistanceSlider'
import AgeSlider from './sliders/AgeSlider'
import Tags from './sliders/Tags'


// const useStyles = makeStyles({
//   stickyFooter: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   center: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing(0.5),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    stickyFooter: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    // center: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  }),
);

function SearchView() {
  const classes = useStyles();
  // const {
  //   errMessage, users, basket, fetchApple, resetApples,
  // } = this.props;
  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <DistanceSlider />
        <AgeSlider />
        <Tags />
        {/* {[1, 2, 3].map(() => (
          <Card />
        ))} */}
        <Button>Overrides or not</Button>
      </Paper>
    </Container>
  );
}

export default SearchView;
