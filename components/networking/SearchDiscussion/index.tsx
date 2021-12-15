import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#555bff !important',
  }
})

function SearchDiscussion() {
  const classes = useStyle()
  return (
    <React.Fragment>
      <TextField fullWidth
        id="text-search"
        label="Search for a discussion..."
        type="search"
        variant="outlined"
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlined sx={{color: "#ae4eff"}} />
            </ InputAdornment>
          ),
        }}
      >
      </TextField>
    </React.Fragment>
  );
}

export { SearchDiscussion };

