import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
/* import Typography from '@mui/material/Typography'; */
import LinkMui from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";



function DiscussionBreadCrumb() {


  const breadcrumbs = [
    <nav>
      <Link to="/">
        <LinkMui underline="hover" key="1" color="secondary" href="/">
          Home
        </LinkMui>
      </Link>
    </nav>
    ,
    <LinkMui

      key="2"
      color="inherit"

    >
      Discussion
    </LinkMui>,
  ];
  return (
    <Box pt={2}>
      <Stack spacing={2} className="BreadCrumb">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          color='secondary'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Box>

  );
}

export { DiscussionBreadCrumb };