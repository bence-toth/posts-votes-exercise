import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [arePostsLoading, setArePostsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setArePostsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setArePostsLoading(false);
      });
  }, []);

  console.log({ posts, arePostsLoading });

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
