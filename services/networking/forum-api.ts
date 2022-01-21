import DiscussionModel from './discussion-model';
import LikeModel from './like-model';

const FORUM_URL = 'https://get-hired-forum-dev.herokuapp.com';

function fetchJSON<T extends object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  return fetch(input, init).then((value) => value.json());
}

export type DiscussionRequest = Pick<
  DiscussionModel,
  'id' | 'title' | 'content' | 'category'
>;

export type DiscussionResponse = DiscussionModel;

export function findAllDiscussions() {
  return fetchJSON<DiscussionResponse[]>(`${FORUM_URL}/api/discussions`);
}

export type FindDiscussionRequest = Pick<DiscussionRequest, 'id'>;

export function findDiscussion({ id }: FindDiscussionRequest) {
  return fetchJSON<DiscussionResponse>(`${FORUM_URL}/api/discussions/${id}`);
}

export type InsertDiscussionRequest = Omit<DiscussionRequest, 'id'>;

export function insertDiscussion(object: InsertDiscussionRequest) {
  return fetchJSON(`${FORUM_URL}/api/discussions/create`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });
}

export type UpdateDiscussionRequest = Pick<DiscussionRequest, 'id'> &
  Partial<DiscussionRequest>;

export function updateDiscussion(object: UpdateDiscussionRequest) {
  // TODO: Implement update call action
}

export interface LikeRequest extends Pick<LikeModel, 'discussionId'> {
  user_id: number;
  userId: number;
  groupBy: keyof Omit<LikeRequest, 'groupBy'>;
}

export type LikeResponse = LikeModel;

export function findAllDiscussionsLikes() {
  return fetchJSON<LikeResponse[]>(`${FORUM_URL}/api/likes/discussions`);
}

export type FindLikeRequest = Partial<LikeRequest>;

export function findDiscussionLikes(filter: FindLikeRequest) {
  return fetchJSON<LikeResponse[]>(`${FORUM_URL}/api/likes/discussions?${
    new URLSearchParams(filter as Record<string, string>).toString()
  }`);
}

export type ToggleLikeRequest = Omit<LikeRequest, 'groupBy'>;

export function toggleDiscussionLike(object: ToggleLikeRequest) {
  return fetchJSON<LikeResponse>(`${FORUM_URL}/api/likes/discussions`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });
}
