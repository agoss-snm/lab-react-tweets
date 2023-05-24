function User(props) {
    return (
      <span className='user'>
        <span>{props.userData} </span>
        <span>{props.handle}</span>          
        </span> 
    );
  }
  
  export default User;