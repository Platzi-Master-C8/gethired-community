import React from 'react';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

function CreateDiscussionButton () {
    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" startIcon={ <CreateIcon /> }>
                New Discussion
            </Button>
            <br /><br />
        </React.Fragment>
    );
}

export { CreateDiscussionButton };
