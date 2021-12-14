import React from 'react';

import Link from '../../Link';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';



function DiscussionBreadCrumb() {


  const breadcrumbs = [
    <nav key="home">
      <Link
        underline="hover"
        key="1"
        color='#ae4eff'
        href="/networking"
      >
        Home
      </Link>
    </nav>
    ,
    <Link
      underline="hover"
      key="2"
      color='#ae4eff'
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
          color='#ae4eff'
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Box>

  );
}

export { DiscussionBreadCrumb };