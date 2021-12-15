import { Container } from '@mui/material';
import { toNamespacedPath } from 'path/posix';
import React from 'react';
import { SuggestedDiscussion } from '../SuggestedDiscussion';

type DiscussionProps = {
    data: {
        id: number,
        title: string,
        content: string,
        created_at: string,
        created_by: string,
        is_active: boolean
    }[];
    names: {
        id: string,
        name: string
    }[];
}

function ListSuggestedDiscussions(props: DiscussionProps) {
    

    return (
        <React.Fragment>
            <Container>
                {(props.names && props.data.length > 0) && props.data.map((item) => {
                    return (
                        <SuggestedDiscussion
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            created_at={item.created_at.slice(0, 10)}
                            created_by={ props.names.find(element => element.id == item.created_by).name }
                            is_active={item.is_active}
                        />
                    );
                })}
            </Container>
        </React.Fragment>
    );
}

export { ListSuggestedDiscussions };