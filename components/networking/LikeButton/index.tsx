import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { FavoriteBorderRounded } from '@mui/icons-material';
import { FavoriteRounded } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LikeService from '../../../services/networking/like-service';

const useStyle = makeStyles({
  liked: {
    color: '#ae4eff',
  },

  unliked: {
    color: '#dcb0ff',
  }
});

interface LikeButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'onClick'> {
  isLiked: boolean;
  onClick?: (liked: boolean) => void;
  likeService: LikeService;
  discussionId?: number;
  userId?: number;
}

function LikeButton({
  isLiked,
  onClick,
  likeService,
  discussionId,
  userId,
  ...props
}: LikeButtonProps) {
  const classes = useStyle();
  const [likeStatus, setLikeStatus] = React.useState<boolean>();

  useEffect(() => {
    setLikeStatus(isLiked);
  }, [isLiked]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const status = !likeStatus;
    // TODO: Update this info from context or by props
    likeService.toggleLike({
      discussionId,
      userId,
    });
    setLikeStatus(status);
    onClick(status);
  }

  return (
    <Box>
      <Button
        variant="text"
        color="secondary"
        size='small'
        onClick={handleClick}
        {...props}
      >
        {likeStatus ? (
          <FavoriteRounded className={classes.liked} />
        ) : (
          <FavoriteBorderRounded className={classes.unliked} />
        )}
      </Button>
    </Box>
  );
}

export { LikeButton }