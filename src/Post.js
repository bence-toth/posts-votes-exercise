import "./Post.css";

const Post = ({ title, userId, children, votes, onVoteUp, onVoteDown }) => (
  <article className="post">
    <h2>{title}</h2>
    <span className="by">by User #{userId}</span>
    <p>{children}</p>
    <div className="votes">
      <span>{votes} votes</span>
      <button onClick={onVoteUp}>Vote up</button>
      <button onClick={onVoteDown}>Vote down</button>
    </div>
  </article>
);

export default Post;
