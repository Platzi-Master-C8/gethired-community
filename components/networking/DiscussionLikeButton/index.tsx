import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { FavoriteBorderRounded } from '@mui/icons-material';
import { FavoriteRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

type LikeProps = {
    isActive: boolean;
    onClick?: ((liked: boolean) => void);
}

const useStyle = makeStyles({

    buttonLiked: {
        color: '#ae4eff',

    },

    unlikedButton: {
        color: '#DCB0FF',

    }
})

function DiscussionLikeButton(props: LikeProps) {

    const classes = useStyle()

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
                    {likeStatus && <FavoriteRounded className={classes.buttonLiked} />}
                    {!likeStatus && <FavoriteBorderRounded className={classes.unlikedButton} />}
                </Button>
            </div>
        </Box>
    );
}

export { DiscussionLikeButton };