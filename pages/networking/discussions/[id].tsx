import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Grid } from '@mui/material';

import { DiscussionLikeButton } from '../../../components/networking/DiscussionLikeButton';
import { DiscussionPost } from '../../../components/networking/DiscussionPost';
import { DiscussionBreadCrumb } from '../../../components/networking/DiscussionBreadCrumb';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    likeButtonContainer: {
        paddingTop: '16px'
    }
})

function Discussion() {
    const classes = useStyle()

    const { query: { id } } = useRouter();

    const [discussionData, setDiscussionData] = useState({
        title: '',
        content: '',
        created_at: '',
        created_by: 0,
        is_active: false
    });


    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/discussions/${id}`)
                .then(response => response.json())
                .then(discussion => {
                    setDiscussionData(discussion);
                });
        }
    }, [id])

    return (
        <Grid container justifyContent='center'>
            <Grid item sm={11} md={7} lg={8} xl={6}>
                <DiscussionBreadCrumb />
            </ Grid>
            <Grid container justifyContent='center'>
                <Grid item lg={9} xl={6}>
                    <Grid container justifyContent='center'>
                        {discussionData.content && console.log(discussionData)}
                        {discussionData.content &&
                            <React.Fragment>
                                {console.log(discussionData.is_active)}
                                <div className={classes.likeButtonContainer}>
                                    <DiscussionLikeButton isActive={discussionData.is_active} />
                                </div>
                                <Grid item lg={8}>
                                    <DiscussionPost
                                        title={discussionData.title}
                                        content={discussionData.content}
                                        created_at={discussionData.created_at}
                                        created_by={discussionData.created_by}
                                    />
                                </ Grid>
                            </React.Fragment>
                        }
                    </Grid>
                </ Grid>
            </ Grid>
        </Grid>
    );
}

export default Discussion;