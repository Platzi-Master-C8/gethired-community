import React from 'react';
import Container from '@mui/material/Container';
import { SuggestedDiscussion } from '../SuggestedDiscussion';

type DiscussionProps = {
    data: {
        id: number,
        title: string,
        content: string,
        createdAt: string,
        userId: string,
        is_active: boolean,
        likes: number,
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
                { console.log(props.names) }
                {(props.names.length > 0 && props.data.length > 0) && props.data.map((item) => {
                    return (
                        <SuggestedDiscussion
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            createdAt={item.createdAt.slice(0, 10)}
                            userId={ props.names.find(element => element.id == item.userId).name }
                            is_active={item.is_active}
                            likes={item.likes}
                        />
                    );
                })}
            </Container>
        </React.Fragment>
    );
}

export { ListSuggestedDiscussions };