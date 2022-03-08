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
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';

import moment from 'moment';
import {
  Alert,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ReportButton } from '../../../components/security/ReportButton';

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
});

function Discussion() {
  const classes = useStyle();

  const {
    query: { id }
  } = useRouter();

  const [discussionData, setDiscussionData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState<Number>(1);
  const [content, setContent] = React.useState('');
  const [newCommentSucceeded, setNewCommentSucceeded] =
    React.useState<Boolean>(false);
  const [formToggle, setFormToggle] = React.useState<Boolean>(false);

  const [commentType, setCommentType] = React.useState<Number>(1);
  const discussionId = Number(id);

  const onClickFormToggle = () => {
    const form = document.getElementsByClassName('form');
    /* formToggle ? form.style.display = "block" : form.style.display = "none"; */
    setFormToggle(!formToggle);
  };

  useEffect(() => {
    if (id) {
      callApi(
        `https://get-hired-forum-dev.herokuapp.com/api/discussions/${id}`
      ).then((discussion) => {
        setDiscussionData(discussion);
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <>
      <Header />
      <Navbar />
      <Container
        sx={{
          position: 'absolute',
          right: '180px'
        }}
      >
        <Container>
          <Grid container justifyContent='start' sx={{ marginLeft: '3rem' }}>
            <Grid item sm={11} md={7} lg={11} xl={6}>
              {loading ? (
                <div className={classes.Discussion_bread}>
                  <Skeleton variant='text' width={180} height={30} />
                </div>
              ) : (
                <DiscussionBreadCrumb />
              )}
            </Grid>
          </Grid>
        </Container>
        <Grid container justifyContent='center'>
          {loading ? (
            <div className={classes.Discussion_post}>
              <Skeleton variant='rectangular' width={900} height={500} />
            </div>
          ) : (
            discussionData.length > 0 && (
              <Box
                sx={{ mx: 6 }}
                display='flex'
                flexDirection='row'
                justifyContent='center'
                flexGrow={1}
              >
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
            )
          )}
          <Container sx={{ padding: '0px', width: 'inherit' }}>
            <Box
              flexShrink='1'
              alignContent='center'
              height={'2.5rem'}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                margin: '1rem 0'
              }}
            >
              <ReportButton />
              <Button
                sx={{
                  background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
                  marginLeft: '1rem'
                }}
                onClick={onClickFormToggle}
                endIcon={
                  formToggle ? (
                    <ExpandLess fontSize='large' />
                  ) : (
                    <ExpandMore fontSize='large' />
                  )
                }
                variant='contained'
              >
                New Comment
              </Button>
            </Box>
            {newCommentSucceeded && (
              <div>
                <Alert severity='success'>
                  Your comment has been published
                </Alert>
                <br />
              </div>
            )}
            <Box
              sx={{
                display: formToggle ? 'block' : 'none',
                width: 'inherit',
                border: 1,
                borderRadius: '5px',
                borderColor: '#C4C4C4',
                padding: '15px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '40px',
                  marginTop: '10px'
                }}
              >
                <TextField
                  placeholder={`Type the content of your ${
                    commentType == 1 ? 'contribution' : 'question'
                  }  here...`}
                  id='input-content'
                  fullWidth
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  multiline
                  rows={7}
                  sx={{ marginBottom: '20px' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '2.5rem'
                  }}
                >
                  <RadioGroup
                    /* sx={{
                      display: 'flex',
                      marginRight: '3rem'
                    }} */
                    onChange={(event) => {
                      event.target.value == 'contribution'
                        ? setCommentType(1)
                        : setCommentType(2);
                    }}
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='contribution'
                    name='radio-buttons-group'
                  >
                    <Container
                      style={{
                        width: 'auto',
                        margin: '0',
                        padding: '0',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                      }}
                    >
                      <FormControlLabel
                        value='contribution'
                        control={<Radio />}
                        label='Contribution'
                      />
                      <FormControlLabel
                        value='question'
                        control={<Radio />}
                        label='Question'
                      />
                    </Container>
                  </RadioGroup>
                  <Button
                    variant='contained'
                    sx={{
                      width: 'auto',
                      background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
                    }}
                    startIcon={<CreateIcon />}
                    onClick={() => {
                      const url =
                        'https://get-hired-forum-dev.herokuapp.com/api/contributions';

                      const data = {
                        content: content,
                        userId: 1,
                        contributionTypeId: commentType,
                        discussionId: discussionId
                      };
                      try {
                        fetch(url, {
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization:
                              'Bearer ' + localStorage.getItem('access_token')
                          },
                          body: JSON.stringify(data),
                          method: 'POST'
                        })
                          .then((data) => data.json())
                          .then(() => {
                            setTitle('');
                            setContent('');
                            setContent('');
                            setNewCommentSucceeded(true);
                            setTimeout(() => {
                              setNewCommentSucceeded(false);
                            }, 5000);
                          });
                      } catch (error) {
                        alert('There was an error: ' + error);
                      }
                    }}
                  >
                    Create {commentType == 1 ? 'CONTRIBUTION' : 'QUESTION'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
          {discussionId && (
            <FixedBottomNavigation
              discussionId={discussionId}
              newCommentSucceeded={newCommentSucceeded}
            />
          )}
        </Grid>
        <style global jsx>{`
          html {
            font-size: initial;
          }
        `}</style>
      </Container>
    </>
  );
}

export default Discussion;
