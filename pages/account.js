import Link from 'next/link';

const account = () => {

  return (
    <div className='account-page'>
      <h1>My Account</h1>
      <h4 className="account__name">ITSYABOY</h4>
      <span className="account__info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus laboriosam explicabo ad pariatur.</span>
      <div className="account__purchase-history" style={{ display: "flex", flexFlow: "column" }}>
        <Link href='/' className="purchase-history__item-1"><a>Aviators</a></Link>
        <Link href='/' className="purchase-history__item-2"><a>Wayfarers</a></Link>
        <Link href='/' className="purchase-history__item-3"><a>Square</a></Link>
      </div>
    </div>
  );
};

export default account;
