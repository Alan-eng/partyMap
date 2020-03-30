import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  fetchUsers,
  fetchBasket,
} from '../../../actions/actions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from './card/Card'


const useStyles = makeStyles({
  stickyFooter: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function ListView() {
  const classes = useStyles();
  // const {
  //   errMessage, users, basket, fetchApple, resetApples,
  // } = this.props;
  return (
    <>
      <Container maxWidth="sm" className={classes.center}>
        <Button>Overrides or not</Button>
        {[1, 2].map(() => (
          <Card />
        ))}
      </Container>
    </>
  );
}

export default ListView;
