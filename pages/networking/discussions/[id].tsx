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
import Header from '../../../components/security/header/Header';
import Navbar from '../../../components/security/navbar/Navbar';

import moment from 'moment';
import { Button, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

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

  const [discussionData, setDiscussionData] = useState({
    title: '',
    content: '',
    createdAt: '',
    createdBy: '',
    isActive: false
  });

  const [loading, setLoading] = useState(true);
  const discussionId = Number(id);

  //
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState<Number>(1);
  const [content, setContent] = React.useState('');
  const [newDiscussionSucceeded, setNewDiscussionSucceeded] =
    React.useState<Boolean>(false);
  const [formToggle, setFormToggle] = React.useState<Boolean>(false);

  const onClickFormToggle = () => {
    const form = document.getElementsByClassName('form');
    /* formToggle ? form.style.display = "block" : form.style.display = "none"; */
    setFormToggle(!formToggle);
    console.log(formToggle);
  };

  useEffect(() => {
    if (id) {
      fetch(`https://get-hired-forum-dev.herokuapp.com/api/discussions/${id}`)
        .then((response) => response.json())
        .then((discussion) => {
          setDiscussionData(discussion);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <Header />
      <Navbar />

      <Container maxWidth="lg">
        <Container>
          <Grid container justifyContent="center">
            <Grid item sm={11} md={7} lg={11} xl={6}>
              {loading ? (
                <div className={classes.Discussion_bread}>
                  <Skeleton variant="text" width={180} height={30} />
                </div>
              ) : (
                <DiscussionBreadCrumb />
              )}
            </Grid>
          </Grid>
        </Container>
        <Grid container justifyContent="center">
          {loading ? (
            <div className={classes.Discussion_post}>
              <Skeleton variant="rectangular" width={900} height={500} />
            </div>
          ) : (
            discussionData.content && (
              <Box
                sx={{ mx: 6 }}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                flexGrow={1}
              >
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
                  created_at={moment(discussionData.createdAt).fromNow()}
                  created_by={discussionData.createdBy}
                />
              </Box>
            )
          )}
          <Container sx={{ padding: '0px', width: 'inherit' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button
                sx={{
                  margin: '1rem',
                  transition: '4s',
                  background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
                }}
                onClick={onClickFormToggle}
                endIcon={
                  formToggle ? (
                    <ExpandLess fontSize="large" />
                  ) : (
                    <ExpandMore fontSize="large" />
                  )
                }
                variant="contained"
              >
                New Discussion
              </Button>
            </Box>
            <Box
              sx={{
                display: formToggle ? 'block' : 'none',
                margin: '0 auto',
                border: 1,
                borderRadius: '5px',
                borderColor: 'grey.400',
                padding: '15px',
                overflow: 'hidden',
                transition: 'max-height 4s ease-out',
                maxWidth: '50rem'
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
                  id="input-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="Title"
                  variant="outlined"
                  sx={{ marginBottom: '25px', borderWidth: '2px' }}
                />
                <TextField
                  placeholder="Type the content of an discussion here..."
                  id="input-content"
                  fullWidth
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  multiline
                  rows={7}
                  sx={{ marginBottom: '25px' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '25px'
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: '220px',
                      background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
                    }}
                    startIcon={<CreateIcon />}
                    onClick={() => {
                      const url =
                        'https://get-hired-forum-dev.herokuapp.com/api/discussions';
                      const data = {
                        title: title,
                        categoryId: category,
                        content: content,
                        userId: 1
                      };
                      console.log(data);
                      try {
                        fetch(url, {
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                          method: 'POST'
                        })
                          .then((data) => data.json())
                          .then((json) => {
                            console.log(JSON.stringify(json));
                          })
                          .then(() => {
                            setTitle('');
                            setContent('');
                            setContent('');
                            setNewDiscussionSucceeded(true);
                            setTimeout(() => {
                              setNewDiscussionSucceeded(false);
                            }, 5000);
                          });
                      } catch (error) {
                        alert('There was an error: ' + error);
                      }
                    }}
                  >
                    Create Discussion
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
          {discussionId && (
            <FixedBottomNavigation discussionId={discussionId} />
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
