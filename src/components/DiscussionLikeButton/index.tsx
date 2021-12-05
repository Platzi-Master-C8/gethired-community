import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';


function DiscussionLikeButton() {
    return (
        <Box p={2}>
            <div>
                <Button variant="text" color="secondary" size='small'>
                    <span>
                        <FavoriteBorderIcon />
                    </span>
                </Button>
            </div>
        </Box>
    );
}

export { DiscussionLikeButton };