import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DiscussionPost } from '../../../components/networking/DiscussionPost';
import { DiscussionBreadCrumb } from '../../../components/networking/DiscussionBreadCrumb';
import { makeStyles } from '@mui/styles';
import { DiscussionLikeCounter } from '../../../components/networking/DiscussionLikeCounter';
import Box from '@mui/system/Box';
import Skeleton from '@mui/material/Skeleton';
import { FixedBottomNavigation } from '../../../components/networking/CommentsSystem';
import { callApi } from '../../../utils/helpers/callApi';
import Moment from 'moment';

const useStyle = makeStyles({
    likeButtonContainer: {
        paddingTop: '16px'
    },
    Discussion_bread: {
        marginTop: '12px'
    },
    Discussion_post: {
        marginTop: '30px'
    }
})

function Discussion() {
    const classes = useStyle()

    const { query: { id } } = useRouter();

    const [discussionData, setDiscussionData] = useState({
        title: '',
        content: '',
        createdAt: '',
        createdBy: '',
        isActive: false
    });

    const [loading, setLoading] = useState(true)
    const discussionId = Number(id);

    useEffect(() => {
        if (id) {
            callApi(`https://get-hired-forum-dev.herokuapp.com/api/discussions/${id}`)
                .then(discussion => {
                    setDiscussionData(discussion);
                    setLoading(false)
                });
        }
    }, [id])


    return (
        <Container maxWidth="lg">
            <Container>
                <Grid container justifyContent='center'>
                    <Grid item sm={11} md={7} lg={11} xl={6}>
                        {loading
                            ?
                            <div className={classes.Discussion_bread}>
                                <Skeleton variant='text' width={180} height={30} />
                            </div>
                            :
                            <DiscussionBreadCrumb />
                        }
                    </Grid>
                </Grid>
            </Container>
            <Grid container justifyContent='center'>
                {
                    loading
                        ? (
                            <div className={classes.Discussion_post}>
                                <Skeleton variant='rectangular' width={900} height={500} />
                            </div>
                        ) : (
                            <Grid item xl={12} sx={{ 
                                width: 'inherit'
                             }}>
                                {discussionData &&
                                    
                                    <Box display="flex" flexDirection="row" >
                                        <DiscussionLikeCounter
                                            isLiked={discussionData[0].isActive}
                                            likesCount={discussionData[0].likesCount}
                                            discussionId={discussionId}
                                            userId={discussionData[0].userId} // TODO: Get the global user id
                                            boxProps={{
                                                pt: '1em'
                                            }}
                                        />

                                        <DiscussionPost
                                            title={discussionData[0].title}
                                            content={discussionData[0].content}
                                            createdAt={discussionData[0].createdAt}
                                            userId={discussionData[0].userId}
                                            userFullName={discussionData[0].userFullName}
                                            category={discussionData[0].category}
                                        />
                                    </Box>
                                }
                            </Grid>
                        )
                }

                <FixedBottomNavigation />
            </Grid>
            <style global jsx>{`
                html {
                    font-size: initial;
                }
            `}</style>
        </Container>
    );
}


export default Discussion;
