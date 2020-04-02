// @ts-nocheck 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation } from 'react-router-dom';
// import { useRouteMatch } from "react-router-dom";
import Link from '@material-ui/core/Link';
// import { Link as RouterLink} from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  Map,
  List,
  Search,
  Event,
  PermIdentity
} from '@material-ui/icons';

const useStyles = makeStyles({
  footer: {
    flexShrink: 0,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: '100%',
    position: 'sticky',
    bottom: 0
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  let locationURL = useLocation();
  const [value, setValue] = React.useState(locationURL.pathname);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.footer}>
      <BottomNavigationAction component={RouterLink} to="/" label="Map" value="/map" icon={<Map />} />
      <BottomNavigationAction component={RouterLink} to="/list" label="List" value="/list" icon={<List />} />
      <BottomNavigationAction component={RouterLink} to="/search" label="Search" value="/search" icon={<Search />} />
      <BottomNavigationAction component={RouterLink} to="/calendar" label="Calendar" value="/calendar" icon={<Event />} />
      <BottomNavigationAction component={RouterLink} to="/settings" label="Settings" value="/settings" icon={<PermIdentity />} />
    </BottomNavigation>
  );
}
