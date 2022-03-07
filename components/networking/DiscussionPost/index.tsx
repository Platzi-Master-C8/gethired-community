import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AccessTimeFilledRounded from '@mui/icons-material/AccessTimeFilledRounded';

import Moment from 'moment';

import { makeStyles } from '@mui/styles';
import { ReportButton } from '../../security/ReportButton/index';

import { getUserName } from '../../../utils/helpers/userName';

const useStyle = makeStyles({
  icon: {
    color: '#ae4eff'
  }
});

/* type DiscussionProps = {
    title: string,
    content: string,
    createdAt: string,
    userId: string,
    userFullName: string
} */

function splitByNewLine(str: string) {
  if (str.indexOf('\r\n')) {
    return str.split('\r\n');
  } else if (str.indexOf('\r')) {
    return str.split('\r');
  } else {
    return str.split('\n');
  }
}

function DiscussionPost({
  title,
  content,
  createdAt,
  category,
  userId,
  userFullName
}) {
  const classes = useStyle();

  const paragraphs = splitByNewLine(content);

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Box p={2}>
        <Typography variant="h4" fontWeight="600">
          {title}
        </Typography>
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
        <Typography
          paragraph
          m={1}
          sx={{
            marginRight: '1rem'
          }}
        >
          {userFullName}
        </Typography>
        <AccessTimeFilledRounded className={classes.icon} />
        <Typography
          paragraph
          m={1}
          sx={{
            marginRight: '1rem'
          }}
        >
          {Moment(createdAt).fromNow()}
        </Typography>
        <div
          style={{
            backgroundColor: '#AE4EFF',
            borderRadius: '3px',
            color: 'white',
            alignContent: 'center',
            width: 'auto',
            padding: '2px 3px'
          }}
        >
          {category}
        </div>
      </Box>
    </Box>
  );
}

export { DiscussionPost };
