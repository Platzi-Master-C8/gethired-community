import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AccessTimeFilledRounded from '@mui/icons-material/AccessTimeFilledRounded';

import Moment from 'moment';

import { makeStyles } from '@mui/styles';

import { getUserName } from '../../../utils/helpers/userName';

const useStyle = makeStyles({
    icon: {
        color: '#ae4eff'
    }
})

type DiscussionProps = {
    title: string,
    content: string,
    created_at: string,
    created_by: string,
}

function splitByNewLine(str: string) {
    if (str.indexOf('\r\n')) {
        return str.split('\r\n');
    } else if (str.indexOf('\r')) {
        return str.split('\r');
    } else {
        return str.split('\n');
    }
}

function DiscussionPost(props: DiscussionProps) {

    const classes = useStyle()

    const paragraphs = splitByNewLine(props.content);

    return (
        <div>
            <Box p={2}>
                <Typography variant='h4' fontWeight='600' >
                    {props.title}
                </ Typography>
                <Box pt={2}>
                    {paragraphs.map((content, index) => (
                        <Typography key={index} paragraph>
                            {content}
                        </Typography>
                    ))}
                </Box>
            </Box>
            <Box pl={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircleTwoToneIcon className={classes.icon} />
                <Typography paragraph m={1} sx={{ 
                    marginRight: '1rem'
                 }}>
                    {getUserName()}
                </ Typography>
                <AccessTimeFilledRounded className={classes.icon} />
                <Typography paragraph m={1}>
                    {Moment(props.created_at).fromNow()}
                </ Typography>
            </Box>
        </div>

    );
}



export { DiscussionPost };