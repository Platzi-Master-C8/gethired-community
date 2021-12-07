import React, { useEffect } from 'react';

/* import { useLocation } from 'react-router-dom' */

/* import { makeStyles } from '@mui/styles'; */
import Box from '@mui/material/Box';
import { FavoriteBorderRounded } from '@mui/icons-material';
import { FavoriteRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

type LikeProps = {
    isActive: boolean;
}

function DiscussionLikeButton(props: LikeProps) {
    console.log('Traemos: ' + props.isActive)

    const [likeStatus, setLikeStatus] = React.useState<boolean>();

    useEffect(() => {
        setLikeStatus(props.isActive);
    }, [])

    const clicked = () => {
        setLikeStatus(!likeStatus);
    }

    return (
         <Box pt={2.5}>
            <div>
                <Button variant="text" color="secondary" size='small' onClick={clicked}>
                            { likeStatus && <FavoriteRounded /> }
                            { !likeStatus && <FavoriteBorderRounded /> }
                </Button>
            </div>
        </Box>
    );
}

export { DiscussionLikeButton };