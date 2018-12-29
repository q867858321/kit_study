
var baseUrl='https://d.apicloud.com/mcm/api';
const postListFilter = {
    fields: ["id", "title", "author", "vote", "updatedAt"],
    limit: 10,
    order: "updatedAt DESC",
    include: "authorPointer",
    includefilter: { user: { fields: ["id", "username"] } }
  };
const postByIdFilter=id=>({
    fields:["id", "title", "author", "vote", "updatedAt", "content"],
    where:{id:id},
    include:"authorPointer",
    includefilter:{user:{fields:["id","usename"]}}
})
function encodeFilter(filter) {
    return encodeURIComponent(JSON.stringify(filter));
}
export default {
    login:()=>`${baseUrl}/user/login`,
    getPostList:()=>`${baseUrl}/post?filter=${encodeFilter(postListFilter)}`,
    getPostById:id=>`${baseUrl}/post?filter=${encodeFilter(postByIdFilter(id))}`
};