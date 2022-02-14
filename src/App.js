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
        <article key={post.id}>
          <h2>{post.title}</h2>
          <span className="by">by User #{post.userId}</span>
          <p>{post.body}</p>
          <div className="votes">
            <span>0 votes</span>
            <button>Vote up</button>
            <button>Vote down</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
