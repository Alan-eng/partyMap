import React, { Component } from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import YMap from './YMap.jsx'
import { Hello } from '../presentational/Hello.tsx'
import BottomNav from './bottomNavigation/BottomNav.tsx'
import UsersList from '../presentational/UsersList.jsx';
import Basket from '../presentational/Basket.jsx';
import {
  fetchUsers,
  fetchBasket,
  fetchApple,
  resetApples,
} from '../../actions/actions.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const mapStateToProps = (state) => ({
  users: state.users,
  basket: state.basket,
  errMessage: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchBasket: () => dispatch(fetchBasket()),
  fetchApple: (id, apple) => dispatch(fetchApple(id, apple)),
  resetApples: () => dispatch(resetApples()),
});

function AppContainer () {

    const classes = useStyles();
    // const {
    //   errMessage, users, basket, fetchApple, resetApples,
    // } = this.props;
    return (
      <>
        <CssBaseline/>
        <div className={classes.stickyFooter}>
          <div className={classes.content}>
            <Hello helloObj={{text: 'Ololo', addText: 'Ehehe'}}/>
            <Button>Overrides CSS</Button>
            <YMap/>
          </div>
          <BottomNav/>
        </div>
      </>
    );
  }

// AppContainer.defaultProps = {
//   errMessage: null,
// };

// AppContainer.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.object).isRequired,
//   basket: PropTypes.arrayOf(PropTypes.string).isRequired,
//   errMessage: PropTypes.string,
//   fetchUsers: PropTypes.func.isRequired,
//   fetchBasket: PropTypes.func.isRequired,
//   fetchApple: PropTypes.func.isRequired,
//   resetApples: PropTypes.func.isRequired,
// };


const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default App;
