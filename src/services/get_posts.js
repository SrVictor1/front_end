import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS_QUERY } from "./query";

function Posts() {
  const { data, loading, error } = useQuery(GET_POSTS_QUERY);

  const posts = data?.getAllUsers;
  if (loading) return <p>Almost there...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
