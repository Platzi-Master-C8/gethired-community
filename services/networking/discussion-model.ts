export default interface DiscussionModel {
  id: number;
  title: string;
  content: string;
  category: number;
  created_at: string;
  created_by: number;
  modified_at: null;
  modified_by: null;
  status: number;
  discussion_version_no: number;
}
