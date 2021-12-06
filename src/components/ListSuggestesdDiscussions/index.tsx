import { Container } from '@mui/material';
import React from 'react';
import { SuggestedDiscussion } from '../SuggestedDiscussion';

function ListSuggestedDiscussions() {
    return(
        <React.Fragment>
            <Container>
                {/* {ListSuggestedDiscussions.map(() => ( */}
                    {/* <Grid container spacing>

                    </Grid> */}
                
                <SuggestedDiscussion />
                <SuggestedDiscussion />
                <SuggestedDiscussion />
                <SuggestedDiscussion />
                <SuggestedDiscussion />
                <SuggestedDiscussion />
                    
                {/* ))} */}
            </Container>
        </React.Fragment>
    );
}

export { ListSuggestedDiscussions };