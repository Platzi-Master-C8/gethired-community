import DiscussionModel from './discussion-model';
import LikeModel from './like-model';

const FORUM_URL = 'https://get-hired-forum-dev.herokuapp.com';

function fetchJSON<T extends object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  return fetch(input, init).then((value) => value.json());
}

type DiscussionRequest = Pick<
  DiscussionModel,
  'id' | 'title' | 'content' | 'category'
>;

type DiscussionResponse = DiscussionModel;

export function findAllDiscussions() {
  return fetchJSON<DiscussionResponse[]>(`${FORUM_URL}/api/discussions`);
}

type FindDiscussionRequest = Pick<DiscussionRequest, 'id'>;

export function findDiscussion({ id }: FindDiscussionRequest) {
  return fetchJSON<DiscussionResponse>(`${FORUM_URL}/api/discussions/${id}`);
}

type InsertDiscussionRequest = Omit<DiscussionRequest, 'id'>;

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

type UpdateDiscussionRequest = Pick<DiscussionRequest, 'id'> &
  Partial<DiscussionRequest>;

export function updateDiscussion(object: UpdateDiscussionRequest) {}

interface LikeRequest extends Pick<LikeModel, 'discussionId'> {
  user_id: number;
  groupBy: keyof Omit<LikeRequest, 'groupBy'>;
}

type LikeResponse = LikeModel;

export function findAllLikes() {
  return fetchJSON<LikeResponse[]>(`${FORUM_URL}/api/likes/discussions`);
}

type FindLikeRequest = Partial<LikeRequest>;

export function findLikes(filter: FindLikeRequest) {
  return fetchJSON<LikeResponse[]>(`${FORUM_URL}/api/likes/discussions`, {
    body: new URLSearchParams(filter as Record<string, string>),
  });
}

type ToggleLikeRequest = Omit<LikeRequest, 'groupBy'>;

export function toggleLike(object: ToggleLikeRequest) {
  return fetchJSON<LikeResponse>(`${FORUM_URL}/api/likes/discussions`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });
}
