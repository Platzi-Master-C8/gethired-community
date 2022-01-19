import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ComponentProps, useState } from "react";
import { DiscussionLikeButton } from "../DiscussionLikeButton";

interface DiscussionLikeCounterProps {
  isLiked: boolean;
  boxProps?: Partial<ComponentProps<typeof Box>>;
  buttonProps?: Partial<ComponentProps<typeof DiscussionLikeButton>>;
  typographyProps?: Partial<ComponentProps<typeof Typography>>;
}

function DiscussionLikeCounter({
  isLiked,
  boxProps,
  buttonProps,
  typographyProps,
}: DiscussionLikeCounterProps): JSX.Element {
  // TODO: Make a request to fetch post's likes
  const [likeCount, setLikeCount] = useState(5);

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
        {likeCount}
      </Typography>
    </Box>
  );
}

export { DiscussionLikeCounter };
