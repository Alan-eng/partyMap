import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  fetchUsers,
  fetchBasket,
} from '../../../actions/actions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  stickyFooter: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flex: '1 0 auto',
  },
});

function ListView() {
  const classes = useStyles();
  // const {
  //   errMessage, users, basket, fetchApple, resetApples,
  // } = this.props;
  return (
    <>
      <Button>Overrides CSS</Button>
      <ul>
        <li>Список1</li>
      </ul>
    </>
  );
}

export default ListView;
