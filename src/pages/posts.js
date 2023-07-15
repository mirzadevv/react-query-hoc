import { getPosts } from "../services/posts";
import { withDataFetching } from "../hoc/withDataFetching";

function Posts({ data }) {
  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
const PostsContainer = withDataFetching(Posts, getPosts);
export default PostsContainer;
