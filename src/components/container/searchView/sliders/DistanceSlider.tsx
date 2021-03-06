import React from 'react';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300,
        },
        margin: {
            height: theme.spacing(3),
        },
    }),
);

const PrettoSlider = withStyles({
    root: {
        color: '#FFD646',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
        color: '#EAEAEA'
    },
})(Slider);

const marks = [
    {
        value: 1,
        label: '1 км',
    },
    {
        value: 3,
        label: '3 км',
    },
    {
        value: 5,
        label: '5 км',
    },
    {
        value: 10,
        label: '10 км',
    },
    {
        value: 15,
        label: '15 км',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-always" gutterBottom>
                Как далеко от меня (км):
      </Typography>
            <PrettoSlider
                aria-label="pretto slider"
                defaultValue={10}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={marks}
                min={1}
                max={15}
                valueLabelDisplay="auto"
            />
        </div>
    );
}