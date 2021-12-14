import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SelectCategories } from '../../components/networking/SelectCategories';
import { CreateDiscussionButton } from '../../components/networking/CreateDiscussionButton.tsx';
import { ListSuggestedDiscussions } from '../../components/networking/ListSuggestesdDiscussions';
import { SearchDiscussion } from '../../components/networking/SearchDiscussion';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    margin: '1rem',
    alignItems: 'baseline'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function Home() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:3001/api/discussions/')
      .then(response => response.json())
      .then(response => {
        setData(response.slice(0, 7));
      })
  }, []);

  return (
    <React.Fragment>
      <Container fixed maxWidth="md">
        <div className={classes.row} >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
          >
            Forum
          </Typography>
        </div>
        <CreateDiscussionButton />
        <div className={classes.row}>
          <SearchDiscussion />
          <SelectCategories />
        </div>
        <Typography
          variant="h6"
          component="h2"
        >
          Suggested discussions:
        </Typography>
        <br /><br />
        {data.length > 0 && <ListSuggestedDiscussions data={data} />}
      </Container>
    </React.Fragment>
  );
}

export default Home;
