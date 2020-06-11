import React from 'react';
import Link from 'next/link';

function Navbar() {
  const style = {
    width: "100%",
    height: "10vh",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    color: "white"
  }

  return (
    <div style={style}>
      <Link href='/' ><a>HOME</a></Link>
      <Link href='/account' ><a>ACCOUNT</a></Link>
      <Link href='/checkout' ><a>CHECKOUT</a></Link>
    </div>
  );
}

export default Navbar;