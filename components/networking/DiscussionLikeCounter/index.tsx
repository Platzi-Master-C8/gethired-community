import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ComponentProps, useState } from "react";
import { DiscussionLikeButton } from "../DiscussionLikeButton";

interface DiscussionLikeCounterProps {
  isActive: boolean;
  boxProps?: ComponentProps<typeof Box>;
  buttonProps?: ComponentProps<typeof DiscussionLikeButton>;
  typographyProps?: ComponentProps<typeof Typography>;
}

function DiscussionLikeCounter({
  isActive,
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
        isActive={isActive}
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
