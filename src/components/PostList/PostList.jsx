import { PostItem } from "./PostItem";

export const PostList = ({ users, title }) => {
  return (
    <>
      {title && <h2 className="post-list-title">{title}</h2>}
      <ul className="post-list">
        {users.map((item) => (
          <PostItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </>
  );
};
