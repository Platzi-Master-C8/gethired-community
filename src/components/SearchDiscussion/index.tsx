import React from 'react';
import { InputAdornment, TextField } from '@mui/material';

import { SearchOutlined } from '@mui/icons-material';

function SearchDiscussion () {
    return (
        <React.Fragment>
            <TextField fullWidth id="outlined-search" label="Search for a discussion..." type="search" /* startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }> */
            >    
            </TextField>
        </React.Fragment>
    );
}

export { SearchDiscussion };

