import { ComponentProps, ComponentType } from "react";

import LikeService from "../../services/networking/like-service";

interface LikeServiceProps {
  likeService: LikeService;
}

function withLikeService<P extends LikeServiceProps>(
  WrappedComponent: ComponentType<P>,
  service: LikeService,
) {
  function WithLikeService(props: Omit<P, 'likeService'>) {
    return (
      <WrappedComponent likeService={service} {...props as P} />
    );
  }

  return WithLikeService;
}

export default withLikeService;