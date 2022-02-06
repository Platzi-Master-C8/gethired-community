import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

import { SelectCategories } from '../../components/networking/SelectCategories';
import { ListSuggestedDiscussions } from '../../components/networking/ListSuggestesdDiscussions';
import { SearchDiscussion } from '../../components/networking/SearchDiscussion';
import { NewDiscussionForm } from '../../components/networking/NewDiscussionForm';

import { getUserNames } from '../../utils/helpers/userNames';
import { callApi } from '../../utils/helpers/callApi';

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
  const LIMIT_PAGINATION = 7;
  const api = `https://get-hired-forum-dev.herokuapp.com/api/discussions`;
  
  
  const [ discussions, setDiscussions ] = useState(0);  //Brings the number of discussions in the whole array with no pagination
  const [ offSetPagination, setOffSetPagination ] = useState(0);
  const [ requestUrl, setRequestUrl ] = useState(`${api}?limit=${LIMIT_PAGINATION}&offset=${offSetPagination}`);
  const [ data, setData ] = useState([]);
  
  let names = [];
  const classes = useStyles();

  useEffect(() => {

    callApi(requestUrl)
      .then((response) => {
        setDiscussions(response.count);
        setData(response.rows);
      })
    
  }, [ requestUrl ]);
  
  names = getUserNames(data);

  return (
    <Container style={{ fontSize: '1em' }} fixed maxWidth="md">
      <div className={classes.row} >
        <Typography
          className={classes.forum__title}
          variant="h5"
          component="h2"
          gutterBottom
        >
          Forum
        </Typography>
=======
      </div>
      <NewDiscussionForm />
      {/* <CreateDiscussionButton /> */}

      {/* <div className={classes.row}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <SearchDiscussion />
        </Grid>
        <Grid item xs={12} md={4} sx={{ 
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <SelectCategories />
        </Grid>
      </Grid>
      {/* </div> */}
      <br />
      <Typography
        className={classes.forum__discussions}
        variant="h6"
        component="h2"
      >
        Suggested discussions
      </Typography>
      <br /><br />
      { (data.length > 0 && names.length > 0) && <ListSuggestedDiscussions data={data} names={names} /> }
      <Stack spacing={2} justifyContent="center" alignItems="center">
        { discussions > 0 && ( 
            <Pagination count={ Math.ceil( discussions / LIMIT_PAGINATION) } color="primary" onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              setRequestUrl(`${api}?limit=${LIMIT_PAGINATION}&offset=${(page - 1) * LIMIT_PAGINATION}`)
            }} />
          )
        }  
      </Stack>
      <style global jsx>{`
        html {
          font-size: initial;
        }
      `}</style>
    </Container>
  );
}

export default Home;
