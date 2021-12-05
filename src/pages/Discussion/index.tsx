import React from 'react';
import { DiscussionLikeButton } from '../../components/DiscussionLikeButton';
import { DiscussionPost } from '../../components/DiscussionPost';
import { DiscussionBreadCrumb } from '../../components/DiscussionBreadCrumb';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
    discussion: {

    },
});


function Discussion() {

    return (
        <Grid container justifyContent='center'>
            <Grid item lg={10}>
                <DiscussionBreadCrumb />
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item lg={10}>
                    <Grid container justifyContent='center'>
                        <DiscussionLikeButton />
                        <Grid item lg={8}>
                            <DiscussionPost />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export { Discussion };