import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Grid } from '@mui/material';

import { DiscussionPost } from '../../../components/networking/DiscussionPost';
import { DiscussionBreadCrumb } from '../../../components/networking/DiscussionBreadCrumb';
import { makeStyles } from '@mui/styles';
import { DiscussionLikeCounter } from '../../../components/networking/DiscussionLikeCounter';
import { Box } from '@mui/system';

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
        created_by: '',
        is_active: false
    });


    useEffect(() => {
        if (id) {
            fetch(`https://get-hired-forum-dev.herokuapp.com/api/discussions/${id}`)
                .then(response => response.json())
                .then(discussion => {
                    setDiscussionData(discussion);
                });
        }
    }, [id])

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item sm={11} md={7} lg={8} xl={6}>
                    <DiscussionBreadCrumb />
                </ Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item lg={9} xl={6}>
                    {discussionData.content &&
                        <Box display="flex" flexDirection="row">
                            <DiscussionLikeCounter
                                isActive={discussionData.is_active}
                                boxProps={{
                                    pt: '1em'
                                }}
                            />
                            
                            <DiscussionPost
                                title={discussionData.title}
                                content={discussionData.content}
                                created_at={discussionData.created_at.slice(0, 10)}
                                created_by="Cesar Turner"
                            />
                        </Box>
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default Discussion;