import React, { useState } from 'react';

import Link from '../../Link';

import { Card, CardContent, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { CommentRounded } from '@mui/icons-material';
import { AccessTimeFilledRounded } from '@mui/icons-material';
import { AccountCircleRounded } from '@mui/icons-material';

import { DiscussionLikeCounter } from '../DiscussionLikeCounter';

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
        border: '2px solid #555bff',
        borderRadius: '10px'

    },

    discussionTitle: {
        fontWeight: 'bolder'
    },
    link: {
        textDecoration: 'none'
    },
    userIcon: {
        color: '#ae4eff'
    },
    postDetails: {
        color: '#ae4eff'
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
    created_by: string,
    is_active: boolean,
}

function SuggestedDiscussion(props: DiscussionProps) {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Card className={classes.card} raised={false} sx={{ marginBottom: '1rem', padding: '.5rem' }} variant="outlined">
                <div className={`${classes.row} ${classes.header}`}>
                    <DiscussionLikeCounter
                        isLiked={props.is_active}
                        discussionId={props.id}
                        typographyProps={{
                            className: classes.discussionTitle,
                        }}
                        buttonProps={{
                            discussionId: props.id,
                            userId: 101, // TODO: Get the global user id
                        }}
                    />
                    <div className={classes.column}>
                        <Link
                            className={classes.link}
                            href={`/networking/discussions/${props.id}/`}
                        >
                            <Typography sx={{ color: 'black' }} variant="h5" component="h2" style={{ textDecoration: 'none' }}>
                                {props.title}
                            </Typography>
                        </Link>
                        <div className={classes.row} style={{
                            margin: '10px 0'
                        }}>
                            <AccountCircleRounded className={classes.userIcon} />
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
                            <CommentRounded className={classes.postDetails} />
                            <Typography ml={1}>5</Typography>
                        </div>
                        <div className={classes.row}>
                            <AccessTimeFilledRounded className={classes.postDetails} />
                            <Typography ml={1}>{props.created_at}</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </React.Fragment>
    );
}

export { SuggestedDiscussion };
