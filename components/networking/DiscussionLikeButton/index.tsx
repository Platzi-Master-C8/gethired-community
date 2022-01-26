import { LikeButton } from "../LikeButton";
import withLikeService from "../../../hocs/networking/withLikeService";
import discussionLikeService from "../../../services/networking/discussions/discussion-like-service";

const DiscussionLikeButton = withLikeService(LikeButton, discussionLikeService);

export { DiscussionLikeButton }
