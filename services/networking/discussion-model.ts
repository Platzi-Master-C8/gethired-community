export default interface DiscussionModel {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  createdAt: string;
  createdBy: number;
  modifiedAt: null;
  modifiedBy: null;
  statusId: number;
  discussionVersionNo: number;
}
