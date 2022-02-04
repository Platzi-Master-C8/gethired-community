import React from 'react';

import Link from '../../Link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import CommentRounded from '@mui/icons-material/CommentRounded';
import AccessTimeFilledRounded from '@mui/icons-material/AccessTimeFilledRounded';
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';

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
    title: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 1,
        wordBreak: "break-all",
        overflow: "hidden"
    },
    content: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 1,
        wordBreak: "break-all",
        overflow: "hidden"
    }
});

type DiscussionProps = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    createdBy: string,
    is_active: boolean,
}

function SuggestedDiscussion(props: DiscussionProps) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card} raised={false} sx={{ marginBottom: '1rem', padding: '0' }} variant="outlined">
                <div className={`${classes.row} ${classes.header}`} style={{ marginBottom: '0' }}>
                    <DiscussionLikeCounter
                        isLiked={props.is_active}
                        discussionId={props.id}
                        userId={101} // TODO: Get the global user id
                        typographyProps={{
                            className: classes.discussionTitle,
                        }}
                    />
                    <div className={classes.column}>
                        <Link
                            className={classes.link}
                            href={`/networking/discussions/${props.id}/`}
                        >
                            <Typography sx={{ color: 'black' }} className={classes.title} variant="h5" component="h2">
                                {props.title}
                            </Typography>
                        </Link>           
                        <div className={classes.row} style={{
                            margin: '10px 0'
                        }}>
                            <AccountCircleRounded className={classes.userIcon} />
                            <Typography ml={1}>{props.createdBy}</Typography>
                        </div>
                    </div>
                </div>
                <CardContent style={{ padding: 0, marginBottom: '1rem' }}>
                    <Container >
                        <Typography ml={6.5} className={classes.content} >
                            {props.content}
                        </Typography>
                    </Container>
                    <Container className={classes.row} style={{ paddingBottom: 0, marginBottom: 0 }}>
                        <div className={classes.row} style={{ margin: 0, marginRight: '15px' }}>
                            <CommentRounded className={classes.postDetails} />
                            <Typography ml={1}>5</Typography>
                        </div>
                        <div className={classes.row} style={{ margin: 0 }}>
                            <AccessTimeFilledRounded className={classes.postDetails} />
                            <Typography ml={1}>{props.createdAt}</Typography>
                        </div>
                    </Container>
                </CardContent>
            </Card>

        </React.Fragment>
    );
}

export { SuggestedDiscussion };
