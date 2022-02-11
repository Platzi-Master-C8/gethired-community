import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { makeStyles } from '@mui/styles';
import { ReportButton } from '../../security/ReportButton/index';

const useStyle = makeStyles({
    userIcon: {
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box mr={95} pl={1.5} sx={{ display: 'flex', alignItems: 'center' }}>

                    <AccountCircleTwoToneIcon className={classes.userIcon} fontSize='large' />

                    <Typography paragraph m={0} px={1}>
                        {props.created_by}
                    </ Typography>
                    <Typography paragraph m={0}>
                        {props.created_at}
                    </ Typography>
                </Box>  
                <Box pr={1.5} sx={{ display: 'flex', alignContent: 'center'}}>
                    <ReportButton />                    
                </Box>              
            </Box>
        </div>

    );
}



export { DiscussionPost };