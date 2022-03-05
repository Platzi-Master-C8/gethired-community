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
});

type DiscussionProps = {
  title: string;
  content: string;
  created_at: string;
  created_by: string;
};

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
  const classes = useStyle();

  const paragraphs = splitByNewLine(props.content);

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Box p={2}>
        <Typography variant="h4" fontWeight="600">
          {props.title}
        </Typography>
        <Box pt={2}>
          {paragraphs.map((content, index) => (
            <Typography key={index} paragraph>
              {content}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box flexGrow="1" display="flex" alignItems="center">
          <AccountCircleTwoToneIcon
            className={classes.userIcon}
            fontSize="large"
          />

          <Typography paragraph>{props.created_by}</Typography>
          <Typography paragraph>{props.created_at}</Typography>
        </Box>
        
      </Box>
    </Box>
  );
}

export { DiscussionPost };
