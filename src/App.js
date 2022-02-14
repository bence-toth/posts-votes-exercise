import Post from "./Post";

import usePosts from "./usePosts";

import "./App.css";

const App = () => {
  const { posts, arePostsLoading } = usePosts();

  if (arePostsLoading) {
    return (
      <div className="app">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          userId={post.userId}
          votes={0}
          onVoteUp={() => {}}
          onVoteDown={() => {}}
        >
          {post.body}
        </Post>
      ))}
    </div>
  );
};

export default App;
