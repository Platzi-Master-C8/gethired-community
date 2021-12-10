import React from 'react';
import { InputAdornment, TextField } from '@mui/material';

import { SearchOutlined } from '@mui/icons-material';

function SearchDiscussion () {
    return (
        <React.Fragment>
            <TextField fullWidth id="outlined-search" label="Search for a discussion..." type="search" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
           >    
            </TextField>
        </React.Fragment>
    );
}

export { SearchDiscussion };

