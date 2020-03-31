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
        value: 15,
        label: '15 лет',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 60,
        label: '60+ лет',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([20, 25]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-always" gutterBottom>
                Возраст участников:
      </Typography>
            <PrettoSlider
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                aria-labelledby="range-slider"
                step={1}
                marks={marks}
                min={15}
                max={60}
                valueLabelDisplay="auto"
            />
        </div>
    );
}