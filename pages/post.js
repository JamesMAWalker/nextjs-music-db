import React from 'react';
import { withRouter } from 'next/router';

// const Post = ({ router }) => {
//   console.log(router);

//   const { id } = router.query;
  

//   return (
//     <div>
//       <h2>You are viewing post #{id}</h2>
//     </div>
//   );
// };

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

export default withRouter(Post);