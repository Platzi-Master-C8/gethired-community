import { Container } from '@mui/material';
import React from 'react';
import { SuggestedDiscussion } from '../SuggestedDiscussion';

type DiscussionProps = {
    data: {
        id: number,
        title: string,
        content: string,
        created_at: string,
        created_by: number,
    }[];
}

function ListSuggestedDiscussions(props: DiscussionProps) {
    return (
        <React.Fragment>
            <Container>
                {props.data.length > 0 && props.data.map((item) => {
                    return (
                        <SuggestedDiscussion
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            created_at={item.created_at}
                            created_by={item.created_by}
                        />
                    );
                })}
            </Container>
        </React.Fragment>
    );
}

export { ListSuggestedDiscussions };