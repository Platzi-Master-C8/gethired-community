import React from 'react';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  discussionButton: {
    background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
  }
});

function CreateDiscussionButton() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Button
        className={classes.discussionButton}
        variant="contained"
        startIcon={<CreateIcon />}
        onClick={() => {}}
        sx={{
          margin: '1rem'
        }}
      >
        New Discussion
      </Button>
      <br />
      <br />
    </React.Fragment>
  );
}

export { CreateDiscussionButton };
