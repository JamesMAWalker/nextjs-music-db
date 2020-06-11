import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

// const Post = ({ router }) => {
//   console.log(router);

//   const { id } = router.query;
  

//   return (
//     <div>
//       <h2>You are viewing post #{id}</h2>
//     </div>
//   );
// };

const Post = ({ id, comments }) => {
  console.log(id, comments);
  // const { id } = query;
  return (
    <div>
      <h2>You are viewing post #{id}</h2>
      {comments.map((c) => (
        <div className=''>
          <p>{c.body}</p>
          <span>--{c.email}</span>
        </div>
      ))}
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
  const { data } = res;

  return {...query, comments: data};
}

export default Post;