import React from 'react';
import Container from '@mui/material/Container';
import Moment from 'moment';
import { SuggestedDiscussion } from '../SuggestedDiscussion';
import { Category } from '@mui/icons-material';

type DiscussionProps = {
  data: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    userId: number;
    is_active: boolean;
    likesCount: number;
    userFullName: string;
    contributionsCount: number;
    category: string;
  }[];
};

function ListSuggestedDiscussions(props: DiscussionProps) {
  return (
    <React.Fragment>
      <Container>
        {props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <SuggestedDiscussion
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                createdAt={Moment(item.createdAt).fromNow()}
                userId={item.userId}
                is_active={item.is_active}
                likesCount={item.likesCount}
                userFullName={item.userFullName}
                contributionsCount={item.contributionsCount}
                category={item.category}
              />
            );
          })}
      </Container>
    </React.Fragment>
  );
}

export { ListSuggestedDiscussions };
