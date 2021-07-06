import React from 'react'
import { CardContent, Grid, Typography, CardActions, Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import useStyles from '../../../styles';

export default function Word(props) {
    const playSoundWord = () => {
        document.getElementById(`audio${props.word.id}`).play();
    }
    const handleOpenWordDetail = () => {
        props.setWordDetail(props.word);
        props.openWordDetail();
    }
    let classes = useStyles();
    return (
        <>

            <Grid item xs={6} sm={4} md={3} xl={3}>
                <Card className={classes.wordCard}>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            {props.word.originalWord}
                        </Typography>
                        <Typography color="textSecondary">
                            {props.word.ipa}
                        </Typography>
                        <Typography component="h2">
                            {props.word.translation}
                        </Typography>
                        <audio id={`audio${props.word.id}`}>
                            <source id="sourceAudio" src={props.word.audio}></source>
                        </audio>
                    </CardContent>
                    <CardActions component="h2">
                        <ButtonGroup fullWidth={true}>

                            <Button onClick={playSoundWord} size="small" variant="outlined" color="primary">
                                Nghe
                            </Button>
                            <Button onClick={() => handleOpenWordDetail()} size="small" variant="outlined" color="secondary">
                                Ý Nghĩa
                            </Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}
