import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    likeBtn: {
      color: '#DCB0FF',
    },
    likeBtn_active: {
      color: '#A178DF',
    },
});



function DiscussionLikeButton() {

    const classes = useStyles();
    
    const [ likeStatus, setLikeStatus ] = React.useState(false);

    const clicked = () => {
        setLikeStatus(!likeStatus)
    }

    return (
         <Box pt={2.5}>
            <div>
                 <Button variant="text" color="secondary" size='small'>
                    <span>
                        <FavoriteBorderIcon 
                        sx={{ cursor: 'pointer' }}
                        className={ `${ classes.likeBtn } ${ likeStatus && classes.likeBtn_active }` }
                        onClick={ clicked }
                        />       
                    </span>
                </Button> 
            </div>
        </Box>
    );
}

export { DiscussionLikeButton };