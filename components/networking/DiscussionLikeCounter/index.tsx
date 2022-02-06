import { ComponentProps, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { findDiscussionLikes } from "../../../services/networking/forum-api";
import { DiscussionLikeButton } from "../DiscussionLikeButton";

interface DiscussionLikeCounterProps {
  isLiked: boolean;
  discussionId: number;
  userId: number;
  likes: number;
  boxProps?: Partial<ComponentProps<typeof Box>>;
  buttonProps?: Partial<ComponentProps<typeof DiscussionLikeButton>>;
  typographyProps?: Partial<ComponentProps<typeof Typography>>;
}

function DiscussionLikeCounter({
  discussionId,
  userId,
  likes,
  boxProps,
  buttonProps,
  typographyProps,
}: DiscussionLikeCounterProps): JSX.Element {
  // TODO: Make a request to fetch post's likes
  const [likeCount, setLikeCount] = useState<number>(likes);
  const [isLiked, setIsLiked] = useState<boolean>(null);

  const loadDiscussionLikes = async () => {
    /* const likes = await findDiscussionLikes({
      discussionId,
      groupBy: 'discussionId'
    }); */
    /* setLikeCount(likes.length > 0 ? likes[0].currentdiscussionLikes : 0); */
    setLikeCount(likes);

    const hasLiked = await findDiscussionLikes({
      discussionId,
      userId,
    });
    setIsLiked(hasLiked.length > 0 ? hasLiked[0].isActive : false);
  }

  useEffect(() => {
    loadDiscussionLikes();
    /* setLikeCount(likes); */
  }, []);

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
      <DiscussionLikeButton
        isLiked={isLiked}
        onClick={handleLikeButtonClick}
        discussionId={discussionId}
        userId={userId}
        {...buttonProps}
      />
      <Typography
        align="center"
        {...typographyProps}
      >
        {likeCount ?? <CircularProgress />}
      </Typography>
    </Box>
  );
}

export { DiscussionLikeCounter };
