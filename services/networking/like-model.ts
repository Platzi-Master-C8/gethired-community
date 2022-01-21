export default interface LikeModel {
  id: number;
  discussionId: number;
  likedAt: string;
  userId: number;
  isActive: boolean;
  count: number;
}
