import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SelectCategories } from '../../components/networking/SelectCategories';
import { CreateDiscussionButton } from '../../components/networking/CreateDiscussionButton.tsx';
import { ListSuggestedDiscussions } from '../../components/networking/ListSuggestesdDiscussions';
import { SearchDiscussion } from '../../components/networking/SearchDiscussion';

import { getUserNames } from './helpers/userNames';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    margin: '1rem',
    alignItems: 'baseline'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  forum__title: {
    fontWeight: '600'
  },
  forum__discussions: {
    marginLeft: '18px',
    marginButtom: '3px'
  }
});

function Home() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  var names = [];

  useEffect(() => {
    fetch('https://get-hired-forum-dev.herokuapp.com/api/discussions')
      .then(response => response.json())
      .then(response => {
        setData(response.slice(0, 7));
        
      })
  }, []);

  names = getUserNames(data);

  return (
    <React.Fragment>
      <Container fixed maxWidth="md">
        <div className={classes.row} >
          <Typography
            className={classes.forum__title}
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
          className={classes.forum__discussions}
          variant="h6"
          component="h2"
        >
          Suggested discussions
        </Typography>
        <br /><br />
        {data.length > 0 && <ListSuggestedDiscussions data={data} names={names} />}
      </Container>
    </React.Fragment>
  );
}

export default Home;
