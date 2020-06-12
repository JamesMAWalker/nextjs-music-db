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
  
  return (
    <div>
      <h2>You are viewing post #{id}</h2>
      {comments.map((c) => (
        <Comment {...c}/>
      ))}
    </div>
  );
};

const Comment = ({ body, email }) => {
  return (
    <div>
      <p>{body}</p>
      <span style={{ color: 'red' }}>--{email}</span>
    </div>
  );
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const { data } = res;

  return {...query, comments: data};
}

export default Post;