import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    notchedOutline: {
        borderWidth: '2px',
        borderColor: '#555bff !important',
    }
})

function SelectCategories() {
    const classes = useStyle()

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
                variant="outlined"
                sx={{ m: 1, minWidth: 150, maxWidth: 250 }}
                InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline,
                    }
                }} >

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