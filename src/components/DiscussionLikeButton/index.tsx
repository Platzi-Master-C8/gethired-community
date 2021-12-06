import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';


function DiscussionLikeButton() {

    return (
         <Box pt={2.5}>
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