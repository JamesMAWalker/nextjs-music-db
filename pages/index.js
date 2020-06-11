import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import Navbar from '../components/navbar.component';
import Post from './post';

const index = ({ posts }) => {

  return (
    <div className=''>
      <h1>NEXT JS: Replacing Redux</h1>
      {posts.map((p) => (
        <div key={p.id}>
          <Link href={`/post?id=${p.id}`} as={`/post/${p.id}`}>
            <a>{p.title}</a>
          </Link>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
};


index.getInitialProps = async () => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;


  return { posts: data };
};

export default index;
  

