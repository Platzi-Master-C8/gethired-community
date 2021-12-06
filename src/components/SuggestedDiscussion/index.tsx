import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material'; 
import{ makeStyles } from '@mui/styles';

import { CommentRounded } from '@mui/icons-material';
import { AccessTimeFilledRounded } from '@mui/icons-material';
import { AccountCircleRounded } from '@mui/icons-material';

import { LikeButton } from '../LikeButton';

const useStyles = makeStyles({
    row: {
      display: 'flex',
      margin: '1rem'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        
    },
    header: {
        spaceBetween: 'center'
    },
    content: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "break-all",
        overflow: "hidden"
    }
});

function SuggestedDiscussion () {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card raised={ false } sx={{ marginBottom: '1rem', padding: '.5rem' }} variant="outlined">
                <div className={`${classes.row} ${classes.header}`}>
                    <div>
                        <LikeButton />
                        <Typography>5</Typography>
                    </div>
                    <div>
                        <Typography noWrap variant="h5" component="h2">An amazing title</Typography>
                        <div className={ classes.row }>
                            <AccountCircleRounded />
                            <Typography>Ana Torres</Typography>
                        </div>
                    </div>
                </div>                
                <CardContent sx={{ margin: '0rem', padding: '0rem' }}>
                    <Container  >
                        <Typography className={  classes.content } >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, nobis neque culpa unde aliquid tenetur itaque cumque aspernatur, quasi deserunt eaque doloremque ad delectus magni consectetur nemo, consequuntur rem iste? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati mollitia officia vel maxime tenetur eius distinctio nulla, nam, iste fugit magnam consequuntur! Cupiditate eum repellat tenetur laborum accusamus nihil suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem quasi dolorum eligendi placeat quis odio officia dignissimos? Aliquid consequatur quibusdam corrupti officia molestias repellat et dolores quos totam assumenda!
                        </Typography>
                    </Container>
                    <div className={ classes.row }>
                        <div className={ classes.row }>
                            <CommentRounded />
                            <Typography>5</Typography>
                        </div>
                        <div className={ classes.row }>
                            <AccessTimeFilledRounded />
                            <Typography>Octuber 11, 2021</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export { SuggestedDiscussion };
