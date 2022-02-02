import React from 'react';
import Container from '@mui/material/Container';
import { SuggestedDiscussion } from '../SuggestedDiscussion';

type DiscussionProps = {
    data: {
        id: number,
        title: string,
        content: string,
        createdAt: string,
        createdBy: string,
        isActive: boolean
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
                            createdAt={item.createdAt.slice(0, 10)}
                            createdBy={ props.names.find(element => element.id == item.createdBy).name }
                            is_active={item.isActive}
                        />
                    );
                })}
            </Container>
        </React.Fragment>
    );
}

export { ListSuggestedDiscussions };