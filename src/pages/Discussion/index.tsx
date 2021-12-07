import React, { useEffect, useState } from 'react';
import { DiscussionLikeButton } from '../../components/DiscussionLikeButton';
import { DiscussionPost } from '../../components/DiscussionPost';
import { DiscussionBreadCrumb } from '../../components/DiscussionBreadCrumb';
import { Grid } from '@mui/material';
import { useParams } from 'react-router';

function Discussion() {

    const { id } = useParams();

    const [discussionData, setDiscussionData] = useState({
        title: '',
        content: '',
        created_at: '',
        created_by: 0,
        is_active: false
    });


    useEffect(() => {
        fetch(`http://localhost:3001/api/discussions/${id}`)
            .then(response => response.json())
            .then(discussion => {
                setDiscussionData(discussion);
            })
    }, [])

    return (
        <Grid container justifyContent='center'>
            <Grid item sm={11} md={7} lg={8} xl={6}>
                <DiscussionBreadCrumb />
            </ Grid>
            <Grid container justifyContent='center'>
                <Grid item lg={9} xl={6}>
                    <Grid container justifyContent='center'>
                        { discussionData.content && console.log(discussionData) }
                        { discussionData.content && 
                            <React.Fragment>
                                { console.log(discussionData.is_active) }
                                <DiscussionLikeButton isActive={discussionData.is_active} />
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

export { Discussion };