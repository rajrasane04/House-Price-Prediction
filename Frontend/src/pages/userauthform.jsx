const UserAuthForm = ({ type }) => {
    return (
      <>
        {type === "signin" ? <h1>Welcome Back</h1> : <h1>Create an Account</h1>}
      </>
    );
  };
  
  export default UserAuthForm;
  