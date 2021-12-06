import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
/* import { Icon } from '@mui/material';
import PropTypes from 'prop-types'; */

type DiscussionProps={
    title: string,
    content: string,
    created_at: string,
    created_by:number
}

function DiscussionPost(props:DiscussionProps) {
    return (
        <div>
            <Box p={2}>
                <Typography variant='h4' fontWeight='600' >
                    {props.title}
                </ Typography>
                <Box pt={2}>
                    <Typography paragraph>
                        {props.content} 
                    </Typography>
                </Box>
            </Box>
            <Box pl={1.5}  sx={{display:'flex', alignItems:'center'}}>
                
                <AccountCircleTwoToneIcon fontSize='large' color='secondary'/>
                
                <Typography paragraph m={0} px={1}>
                    {props.created_by}
                </ Typography>
                <Typography paragraph m={0}>
                    {props.created_at}
                </ Typography>
            </Box>
        </div>

    );
}



export { DiscussionPost };