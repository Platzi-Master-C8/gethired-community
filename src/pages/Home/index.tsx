<<<<<<< HEAD
<<<<<<< HEAD
export default {}
=======
=======
>>>>>>> aaad871 (Creat components and add styles to the discussion main page)
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
<<<<<<< HEAD
    getDiscussions('http://localhost:3001/api/discussions').then((response) => { 
      setData(response);
      console.log(data)
    });
=======
    fetch('http://localhost:3001/api/discussions/')
        .then(response => response.json())
        .then(response =>{
          setData(response.slice(0, 7));
          console.log(data);
        })
>>>>>>> 7f00b7b (Bring data of API and pass the props from main view to any other view or component)
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
<<<<<<< HEAD
>>>>>>> cf9b24f (Creat components and add styles to the discussion main page)
=======
>>>>>>> aaad871 (Creat components and add styles to the discussion main page)
