import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import{ makeStyles } from '@mui/styles';

import { SelectCategories } from '../../components/SelectCategories';
import { CreateDiscussionButton } from '../../components/CreateDiscussionButton.tsx';
import { ListSuggestedDiscussions } from '../../components/ListSuggestesdDiscussions';
import { SearchDiscussion } from '../../components/SearchDiscussion';

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
  const [ data, setData ] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    fetch('http://localhost:3001/api/discussions/')
        .then(response => response.json())
        .then(response =>{
          setData(response.slice(0, 7));
        })
  }, []);

  return (
    <React.Fragment>
      <Container fixed maxWidth="md">
        <Typography 
          align="left"
          variant="h5" 
          component="h2"
          gutterBottom
        >
          Forums
        </Typography>
        
        <CreateDiscussionButton />
        
        <div className={classes.row}>
          <SearchDiscussion />
          <SelectCategories />
        </div>
        <br /><br />
        { data.length > 0 && <ListSuggestedDiscussions data={data} /> }
      </Container>
    </React.Fragment>
  );
}

export { Home };
