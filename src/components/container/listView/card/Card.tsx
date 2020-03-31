import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MurmurImage from 'src/com'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: 'blue',
        marginTop: 20,
        background: "url('./murmur.jpg')"
    },
    media: {
        height: 210,
        backgroundSize: 'cover',
        // background: 'linear-gradient(180.24deg, rgba(196, 196, 196, 0) -36.95%, #FECD26 81.46%)',
        backgroundImage: 'linear-gradient(180.24deg, rgba(196, 196, 196, 0) -36.95%, #FECD26 81.46%)'
        // "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
        // url('images/background.jpg')"
    },
    // content: {
    //     '& > *': {
    //         margin: theme.spacing(0.5),
    //     },
    // }
})

export default function searchView() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={'/src/components/container/listView/card/murmur.jpg'}
                    title="Contemplative Reptile"
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                        <Chip label="Чил дома" />
                        <Chip label="Еще 3" />
                    </CardContent>
                </CardMedia>
            </CardActionArea>
        </Card>
    );
}