const checkout = () => {
  console.log('*****rendering checkout*****');
  
  
  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <div className='checkout__items'>
        <span className='checkout__item1'>Aviators</span>
        <span className='checkout__item2'>Wayfarers</span>
        <span className='checkout__item3'>Square</span>
      </div>
      <button className='checkout__button'>checkout</button>
    </div>
  );
};

export default checkout;
