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
            fetch(`https://get-hired-forum-dev.herokuapp.com/api/discussions/${id}`)
                .then(response => response.json())
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
                            <Grid item xl={12}>
                                {discussionData.content &&
                                    <Box display="flex" flexDirection="row">
                                        <DiscussionLikeCounter
                                            isLiked={discussionData.isActive}
                                            likes={0}
                                            discussionId={discussionId}
                                            userId={101} // TODO: Get the global user id
                                            boxProps={{
                                                pt: '1em'
                                            }}
                                        />

                                        <DiscussionPost
                                            title={discussionData.title}
                                            content={discussionData.content}
                                            created_at={discussionData.createdAt.slice(0, 10)}
                                            created_by={discussionData.createdBy}
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
