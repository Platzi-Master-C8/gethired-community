import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import Button, { ButtonProps } from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import LikeService from '../../../services/networking/like-service';

const useStyle = makeStyles({
  liked: {
    color: '#ae4eff'
  },

  unliked: {
    color: '#dcb0ff'
  }
});

interface LikeButtonProps
  extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'onClick'> {
  isLiked: boolean;
  onClick?: (liked: boolean) => void;
  likeService: LikeService;
  discussionId?: number;
}

function LikeButton({
  isLiked,
  onClick,
  likeService,
  discussionId,
  ...props
}: LikeButtonProps) {
  const classes = useStyle();
  const [likeStatus, setLikeStatus] = React.useState<boolean>();

  useEffect(() => {
    setLikeStatus(isLiked);
  }, [isLiked]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const status = !likeStatus;
    likeService.toggleLike({
      discussionId
    });
    setLikeStatus(status);
    onClick(status);
  };

  return (
    <Box>
      <Button
        variant="text"
        color="secondary"
        size="small"
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

export { LikeButton };
