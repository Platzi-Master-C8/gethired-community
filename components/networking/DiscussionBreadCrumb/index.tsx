import React from 'react';

import Link from '../../Link';

import Breadcrumbs from '@mui/material/Breadcrumbs';
/* import Typography from '@mui/material/Typography'; */
// import LinkMui from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';



function DiscussionBreadCrumb() {


  const breadcrumbs = [
    <nav key="home">
      <Link
        underline="hover"
        key="1"
        color="secondary"
        href="/networking"
      >
        Home
      </Link>
    </nav>
    ,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="#"
    >
      Discussion
    </Link>,
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