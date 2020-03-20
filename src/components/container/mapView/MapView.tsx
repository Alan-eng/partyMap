import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore
import YMap from './YMap'
import { Hello } from '../../presentational/Hello'
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

function AppContainer() {

  const classes = useStyles();
  // const {
  //   errMessage, users, basket, fetchApple, resetApples,
  // } = this.props;
  return (
    <>
      <span>На карте</span>
      <Button>Overrides CSS</Button>
      <YMap />
    </>
  );
}

// const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default AppContainer;
