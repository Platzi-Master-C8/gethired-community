import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MUITextEditor } from '../MUITextEditor';
import { SelectCategories } from '../SelectCategories';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/base';
import CreateIcon from '@mui/icons-material/Create';

import { CreateDiscussionButton } from '../CreateDiscussionButton';

function NewDiscussionForm() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState<Number>(1);
  const [content, setContent] = React.useState('');
  const [newDiscussionSucceeded, setNewDiscussionSucceeded] =
    React.useState<Boolean>(false);
  const [formToggle, setFormToggle] = React.useState<Boolean>(false);

  /* const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    }; */

  const onClickFormToggle = () => {
    const form = document.getElementsByClassName('form');
    /* formToggle ? form.style.display = "block" : form.style.display = "none"; */
    setFormToggle(!formToggle);
  };

  return (
    <React.Fragment>
      {newDiscussionSucceeded && (
        <div>
          <Alert severity="success">
            Thee creation of the discussion was successful
          </Alert>
          <br />
        </div>
      )}

      <form action="">
        <Container sx={{ padding: '0px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              sx={{
                margin: '1rem',
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
              border: 1,
              borderRadius: '5px',
              borderColor: 'grey.400',
              padding: '15px',
              overflow: 'hidden',
              transition: 'max-height 4s ease-out'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '270px',
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

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginBottom: '25px'
                }}
              >
                <SelectCategories />
              </Box>

              {/* <div>
                                <MUITextEditor />
                            </div> */}
              <TextField
                placeholder="Type the content of an discussion here..."
                id="input-content"
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={15}
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
                    try {
                      fetch(url, {
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                        method: 'POST'
                      })
                        .then((data) => data.json())
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
      </form>
      <br />
      <br />
    </React.Fragment>
  );
}

export { NewDiscussionForm };
