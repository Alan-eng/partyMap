import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  fetchUsers,
  fetchBasket,
} from '../../actions/actions.ts';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Hello } from '../presentational/Hello.tsx'
import BottomNav from './bottomNavigation/BottomNav.tsx'
import MapView from './mapView/MapView.tsx'
import ListView from './listView/ListView.tsx'

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: '#FFD646',
        borderRadius: 20,
        border: 0,
        padding: '0 30px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
});

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

const mapStateToProps = state => ({
  name: 'state.nestedObject.innerProperty'
})

function AppContainer() {

  const classes = useStyles();
  // const {
  //   errMessage, users, basket, fetchApple, resetApples,
  // } = this.props;
  return (
    <>
      <CssBaseline />
      <div className={classes.stickyFooter}>
        <Router>
          <div className={classes.content}>
            <Route path='/' component={MapView}/>
            <Route exec path='/list' component={ListView}/>
          </div>
          <BottomNav />
        </Router>
      </div>
    </>
  );
}

const App = connect(mapStateToProps)(AppContainer);
export default App;
