import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box';



function DiscussionBreadCrumb() {


  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
    >
      Forum
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