const postListFilter = {
  fields: ["id", "title", "author", "vote", "updatedAt"],
  limit: 10,
  order: "updatedAt DESC",
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
};

const postByIdFilter = id => ({
  fields: ["id", "title", "author", "vote", "updatedAt", "content"],
  where: { id: id },
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
});

const commentListFilter = postId => ({
  fields: ["id", "author", "updatedAt", "content"],
  where: { post: postId },
  limit: 20,
  order: "updatedAt DESC",
  include: "authorPointer",
  includefilter: { user: { fields: ["id", "username"] } }
});

function encodeFilter(filter) {
  return encodeURIComponent(JSON.stringify(filter));
}
const url="https://d.apicloud.com/mcm/api";
export default {
  login: () => `${url}/user/login`,
  getPostList: () => `${url}/post?filter=${encodeFilter(postListFilter)}`,
  getPostById: id => `${url}/post?filter=${encodeFilter(postByIdFilter(id))}`,
  createPost: () => `${url}/post`,
  updatePost: id => `${url}/post/${id}`,
  getCommentList: postId =>
    `${url}/comment?filter=${encodeFilter(commentListFilter(postId))}`,
  createComment: () => `${url}/comment`
};
