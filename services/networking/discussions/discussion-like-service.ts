import { findAllDiscussionsLikes, findDiscussionLikes, toggleDiscussionLike } from "../forum-api";
import LikeService from "../like-service";

class DiscussionLikeService implements LikeService {
  findAllLikes() {
    return findAllDiscussionsLikes();
  }
  findLikes(filter: any) {
    return findDiscussionLikes(filter);
  }
  toggleLike(data: any) {
    return toggleDiscussionLike(data);
  }
}

const instance = new DiscussionLikeService();
export default instance;
