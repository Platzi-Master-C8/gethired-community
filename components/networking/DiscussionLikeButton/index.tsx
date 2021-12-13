import React, { useEffect } from 'react';

/* import { useLocation } from 'react-router-dom' */

/* import { makeStyles } from '@mui/styles'; */
import Box from '@mui/material/Box';
import { FavoriteBorderRounded } from '@mui/icons-material';
import { FavoriteRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

type LikeProps = {
    isActive: boolean;
    onClick?: ((liked: boolean) => void);
}

function DiscussionLikeButton(props: LikeProps) {
    const [likeStatus, setLikeStatus] = React.useState<boolean>();

    useEffect(() => {
        setLikeStatus(props.isActive);
    }, [])

    const handleClick = () => {
        props.onClick?.(!likeStatus);

        setLikeStatus(!likeStatus);
    }

    return (
        <Box>
            <div>
                <Button variant="text" color="secondary" size='small' onClick={handleClick}>
                            { likeStatus && <FavoriteRounded /> }
                            { !likeStatus && <FavoriteBorderRounded /> }
                </Button>
            </div>
        </Box>
    );
}

export { DiscussionLikeButton };