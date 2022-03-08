import { ComponentProps, useEffect, useState, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { findDiscussionLikes } from '../../../services/networking/forum-api';
import { DiscussionLikeButton } from '../DiscussionLikeButton';
import UserProvider from '../../../Providers/UserProvider';

interface DiscussionLikeCounterProps {
  discussionId: number;
  likesCount: number;
  boxProps?: Partial<ComponentProps<typeof Box>>;
  buttonProps?: Partial<ComponentProps<typeof DiscussionLikeButton>>;
  typographyProps?: Partial<ComponentProps<typeof Typography>>;
}

function DiscussionLikeCounter({
  discussionId,
  likesCount,
  boxProps,
  buttonProps,
  typographyProps
}: DiscussionLikeCounterProps): JSX.Element {
  const user = useContext(UserProvider);

  const [isLoading, setIsLoading] = useState(true);

  const [likeCount, setLikeCount] = useState<number>(Number(likesCount));
  const [isLiked, setIsLiked] = useState<boolean>(null);

  const loadDiscussionLikes = async () => {
    setLikeCount(Number(likesCount));
    const userId = user.id;
    const hasLiked = await findDiscussionLikes({ discussionId, userId });
    setIsLiked(
      Array.isArray(hasLiked)
        ? hasLiked.find((like) => like.userId === userId)?.isActive
        : hasLiked.isActive
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (user !== null && user.id && !isNaN(user.id)) {
      loadDiscussionLikes();
    }
  }, [user]);

  const handleLikeButtonClick = (liked: boolean) => {
    if (liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      {...boxProps}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <DiscussionLikeButton
            isLiked={isLiked}
            onClick={handleLikeButtonClick}
            discussionId={discussionId}
            {...buttonProps}
          />
          <Typography align="center" {...typographyProps}>
            {likeCount ?? <CircularProgress />}
          </Typography>
        </>
      )}
    </Box>
  );
}

export { DiscussionLikeCounter };
