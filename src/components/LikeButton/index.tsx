import React from 'react';
import { makeStyles } from '@mui/styles';
import { FavoriteRounded } from '@mui/icons-material';

const useStyles = makeStyles({
    likeBtn: {
      color: '#bbdefb',
    },
    likeBtn_active: {
      color: '#1e88e5',
    },
});

function LikeButton() {
    const classes = useStyles();
    
    const [ likeStatus, setLikeStatus ] = React.useState(false);

    const clicked = () => {
        setLikeStatus(!likeStatus)
    }

    return(
        <FavoriteRounded 
            sx={{ cursor: 'pointer' }}
            className={ `${ classes.likeBtn } ${ likeStatus && classes.likeBtn_active }` }
            onClick={ clicked }
        />
    );
}

export { LikeButton };