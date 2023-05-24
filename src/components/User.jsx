function User(props) {
    return (
      <div className='padd'>
          {props.userData} 
          {props.handle}
      </div>
    );
  }
  
  export default User;