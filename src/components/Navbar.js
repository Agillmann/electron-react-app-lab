import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 'auto',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/map"
        label="Map"
        value="map"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
