<<<<<<< HEAD
export default {}
=======
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import{ makeStyles } from '@mui/styles';

import { SelectCategories } from '../../components/SelectCategories';
import { CreateDiscussionButton } from '../../components/CreateDiscussionButton.tsx';
import { ListSuggestedDiscussions } from '../../components/ListSuggestesdDiscussions';
import { SearchDiscussion } from '../../components/SearchDiscussion';

import { getDiscussions } from '../../utils/getDiscussions';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    margin: '1rem',
    alignContent: 'center',
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
    getDiscussions('http://localhost:3001/api/discussions').then((response) => { 
      setData(response);
      console.log(data)
    });
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
        <ListSuggestedDiscussions />

      </Container>
    </React.Fragment>
  );
}

export { Home };
>>>>>>> cf9b24f (Creat components and add styles to the discussion main page)
