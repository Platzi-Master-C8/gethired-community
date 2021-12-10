import React from 'react';
import { MenuItem, TextField } from '@mui/material';
/* import { SelectChangeEvent } from '@mui/material/Select'; */

function SelectCategories() {

    const [category, setCategory] = React.useState('All');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
      };

    return (
        <React.Fragment>
            <TextField 
                id="outlined-select"
                select
                label="Category"
                value={category}
                onChange={handleChange}
                sx={{ m: 1, minWidth: 150, maxWidth: 250 }} 
                >
                {/* {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))} */}
                <MenuItem key={'All'} value={'All'}>All</MenuItem>
                <MenuItem key={'Development and Engineering'} value={'Development and Engineering'}>Development and Engineering</MenuItem>
                <MenuItem key={'UX & UI'} value={'UX & UI'}>UX & UI</MenuItem>
                <MenuItem key={'Soft Skills'} value={'Soft Skills'}>Soft Skills</MenuItem>
                <MenuItem key={'Marketing'} value={'Marketing'}>Marketing</MenuItem>
            </TextField>
        </React.Fragment>
    );
}

export { SelectCategories };