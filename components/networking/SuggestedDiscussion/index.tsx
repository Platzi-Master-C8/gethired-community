import React, { useState } from 'react';

import Link from '../../Link';

import { Card, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { CommentRounded } from '@mui/icons-material';
import { AccessTimeFilledRounded } from '@mui/icons-material';
import { AccountCircleRounded } from '@mui/icons-material';

import { DiscussionLikeButton } from '../DiscussionLikeButton';

const useStyles = makeStyles({
    row: {
        display: 'flex',
        margin: '1rem'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
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

type DiscussionProps = {
    id: number,
    title: string,
    content: string,
    created_at: string,
    created_by: number,
    is_active: boolean,
}

function SuggestedDiscussion(props: DiscussionProps) {
    const classes = useStyles();

    const [likeCount, setLikeCount] = useState(5);

    const handleLikeButtonClick = (liked: boolean) => {
        if (liked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
    };

    return (
        <React.Fragment>

            <Card raised={false} sx={{ marginBottom: '1rem', padding: '.5rem' }} variant="outlined">
                <div className={`${classes.row} ${classes.header}`}>
                    <div className={classes.column}>
                        <DiscussionLikeButton isActive={ props.is_active } onClick={handleLikeButtonClick} />
                        <Typography align="center">{likeCount}</Typography>
                    </div>
                    <div className={classes.column}>
                            <Link 
                                href={`/networking/discussions/${props.id}/`}
                                underline="hover"
                            >
                                <Typography sx={{color: 'black'}} variant="h5" component="h2" style={{ textDecoration: 'none' }}>
                                    {props.title}
                                </Typography>
                            </Link>
                        <div className={classes.row} style={{ 
                            margin: '10px 0'
                         }}>
                            <AccountCircleRounded color='secondary' />
                            <Typography ml={1}>{props.created_by}</Typography>
                        </div>
                    </div>
                </div>
                <CardContent sx={{ margin: '0rem', padding: '0rem' }}>
                    <Container  >
                        <Typography ml={6.5} className={classes.content} >
                            {props.content}
                        </Typography>
                    </Container>
                    <div className={classes.row}>
                        <div className={classes.row}>
                            <CommentRounded color='secondary' />
                            <Typography ml={1}>5</Typography>
                        </div>
                        <div className={classes.row}>
                            <AccessTimeFilledRounded color='secondary' />
                            <Typography ml={1}>{props.created_at}</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </React.Fragment>
    );
}

export { SuggestedDiscussion };
