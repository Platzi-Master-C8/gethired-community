import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { callApi } from '../../../utils/helpers/callApi';

const useStyle = makeStyles({
    notchedOutline: {
        borderWidth: '2px',
        borderColor: '#555bff !important',
    }
})

interface CategoriesProps {
    setCategoryId?: any,
    setSelectingCategory?: any
}

function SelectCategories({setCategoryId, setSelectingCategory}: CategoriesProps) {
    const ENDPOINT_CATEGORIES = 'https://get-hired-forum-dev.herokuapp.com/api/categories';
    const classes = useStyle();

    const [ categories, setCategories ] = useState([]);
    const [ categorySelected, setCategorySelected ] = useState('Select');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value
        if(category != 'Select') {
            const categoryId = categories.find(item => item.description == category).id
            setCategoryId(categoryId);
        }
        setCategorySelected(category);
        setSelectingCategory(categorySelected);
    };

    useEffect(() => {
        callApi(ENDPOINT_CATEGORIES)
          .then((response) => {
            setCategories(response);
          })
      }, []);

    return (
        <React.Fragment>
            <TextField
                id="input-category"
                select
                label="Category"
                value={categorySelected}
                onChange={handleChange}
                variant="outlined"
                sx={{ minWidth: 250 }}
                InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline,
                    }
                }} >

                <MenuItem key={0} value={'Select'}>Select</MenuItem>
                { categories && categories.map((item) => (
                    <MenuItem key={item.description} value={item.description}>{item.description}</MenuItem>
                )) }
            </TextField>
        </React.Fragment>
    );
}

export { SelectCategories };