import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ComponentProps, useEffect, useState } from "react";
import { findDiscussionLikes } from "../../../services/networking/forum-api";
import { DiscussionLikeButton } from "../DiscussionLikeButton";

interface DiscussionLikeCounterProps {
  isLiked: boolean;
  discussionId: number;
  boxProps?: Partial<ComponentProps<typeof Box>>;
  buttonProps?: Partial<ComponentProps<typeof DiscussionLikeButton>>;
  typographyProps?: Partial<ComponentProps<typeof Typography>>;
}

function DiscussionLikeCounter({
  isLiked,
  discussionId,
  boxProps,
  buttonProps,
  typographyProps,
}: DiscussionLikeCounterProps): JSX.Element {
  // TODO: Make a request to fetch post's likes
  const [likeCount, setLikeCount] = useState<number>(null);

  const loadDiscussionLikes = async () => {
    const likes = await findDiscussionLikes({
      discussionId,
      groupBy: 'discussionId'
    });
    setLikeCount(likes.length);
  }

  useEffect(() => {
    loadDiscussionLikes();
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
