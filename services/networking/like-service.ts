export default interface LikeService<
  FindLikeRequest = any,
  ToggleLikeRequest = any,
  LikeResponse = any
> {
  findAllLikes(): Promise<LikeResponse[]>;
  findLikes(filter: FindLikeRequest): Promise<LikeResponse[]>;

  toggleLike(data: ToggleLikeRequest): Promise<LikeResponse>;
}
