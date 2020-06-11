import React from 'react';

const Post = ({ query }) => {
  console.log(query);
  const { id } = query;
  return (
    <div>
      <h2>You are viewing post #{id}</h2>
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
return query;
}

export default Post;