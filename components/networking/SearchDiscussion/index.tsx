import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  searchDiscussion: {
    borderColor: '#555bff',
    borderRadius: '10px',
    outline: 'none'


  }
})

function SearchDiscussion() {
  const classes = useStyle()
  return (
    <React.Fragment>
      <TextField fullWidth id="text-search" label="Search for a discussion..." type="search" InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlined />
          </ InputAdornment>
        ),
      }}
      >
      </TextField>
    </React.Fragment>
  );
}

export { SearchDiscussion };

