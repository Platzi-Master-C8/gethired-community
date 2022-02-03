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
        setData(response.rows.slice(0, 7));
      })
  }, []);

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
      {data.length > 0 && <ListSuggestedDiscussions data={data} names={names} />}
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Pagination count={15} color="primary" />
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
